#! /bin/bash
BASE_DIRECTORY='/home/guy-livne/life-project/'
CHANGED_SERVICES=$(git diff --name-only HEAD~1 HEAD | grep -Eo '^[^\/]+')

#Exports needed Environment variables for the build process
set -a; export "${BASE_DIRECTORY}.env"; set +a

# Run the build command for each changed service
for SERVICE in $CHANGED_SERVICES; do
    FULL_SERVICE_PATH="${BASE_DIRECTORY}${SERVICE}"
    docker build -t "${SERVICE}:latest" "${FULL_SERVICE_PATH}"
  done  