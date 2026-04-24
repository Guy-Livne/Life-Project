import datetime
import os
import os.path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

from fastapi import FastAPI
from fastapi.params import Body
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

# If modifying these scopes, delete the file token.json.
SCOPES = ["https://www.googleapis.com/auth/calendar"]

# Get the directory where this script is located
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
CREDENTIALS_FILE = os.path.join(SCRIPT_DIR, "credentials.json")
TOKEN_FILE = os.path.join(SCRIPT_DIR, "token.json")

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], # Allow your frontend
    allow_credentials=True,
    allow_methods=["*"], # This allows the OPTIONS preflight, POST, GET, etc.
    allow_headers=["*"] # Allows the Content-Type header
)

def authenticate():
  creds = None
    # The file token.json stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
  if os.path.exists(TOKEN_FILE):
    creds = Credentials.from_authorized_user_file(TOKEN_FILE, SCOPES)
  # If there are no (valid) credentials available, let the user log in.
  if not creds or not creds.valid:
    if creds and creds.expired and creds.refresh_token:
      creds.refresh(Request())
    else:
      if not os.path.exists(CREDENTIALS_FILE):
        raise FileNotFoundError(f"credentials.json not found at {CREDENTIALS_FILE}")
      flow = InstalledAppFlow.from_client_secrets_file(
          CREDENTIALS_FILE, SCOPES
      )
      creds = flow.run_local_server(port=8080)
    # Save the credentials for the next run
    with open(TOKEN_FILE, "w") as token:
      token.write(creds.to_json())
  return creds


@app.get("/")
# This is just a test endpoint to verify that the service is running
def read_root():
  return {"Hello": "World"}

@app.post("/create-event")
def create_event(event: dict = Body(...)):
  
  try:
    creds = authenticate()
    service = build("calendar", "v3", credentials=creds)
    service.events().insert(calendarId='primary', body=event).execute()
    return {"message": "Event created successfully!"}
  
  except HttpError as error:
    print(f"An error occurred: {error}")
    return {"error": str(error)}

def main():
  uvicorn.run(app, host="0.0.0.0", port=8000)

if __name__ == "__main__":
  main()