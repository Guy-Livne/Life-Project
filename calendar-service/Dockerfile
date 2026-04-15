FROM python:3.12
ADD main.py /
ADD credentials.json /
ADD token.json /
ADD requirements.txt /
RUN pip install --no-cache-dir -r requirements.txt
CMD ["python", "main.py"]