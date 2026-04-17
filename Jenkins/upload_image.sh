#! /bin/bash
echo "Starting upload_image.sh script..."
BASE_DIRECTORY='/home/guy-livne/life-project/'
CHANGED_SERVICES=$(git diff --name-only HEAD~1 HEAD | grep -Eo '^[^\/]+' | uniq)
#Exports needed Environment variables for the build process
set -a; source "${BASE_DIRECTORY}.env"; set +a

# Run the build command for each changed service
for SERVICE in $CHANGED_SERVICES; do
    FULL_SERVICE_PATH="${BASE_DIRECTORY}${SERVICE}"
    if [[ $(ls ${FULL_SERVICE_PATH} | grep -c "Dockerfile") -gt 0 ]]; then
        printf "Building and pushing image for service: %s\n" "$SERVICE"
        # Build the Docker image
        docker build -t "${DOCKER_REGISTRY}:${SERVICE}-$(date '+%d.%m.%Y-%k:%M:%S')" "./${SERVICE}"
        # Push the Docker image
        docker login -u "guylivne1" -p "${DOCKER_REPO_PAT}"
        docker push "${DOCKER_REGISTRY}:${SERVICE}"
    fi
done