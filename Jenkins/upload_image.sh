#! /bin/bash
echo "Starting upload_image.sh script..."
CURRENT_COMMIT_TAG=$(git tag --points-at HEAD)
VERSION_REGEX='v[0-9]+\.[0-9]+\.[0-9]+'
SERVICE_REGEX='^[a-zA-Z0-9_-]+'  
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
  echo "Loaded environment variables from .env"
fi
#Environment variables are set by Jenkins (DOCKER_REGISTRY, DOCKER_REPO_PAT)
SERVICE=$(echo "$CURRENT_COMMIT_TAG" | grep -oE "$SERVICE_REGEX")
VERSION=$(echo "$CURRENT_COMMIT_TAG" | grep -oE "$VERSION_REGEX")
NEW_IMAGE_TAG="${DOCKER_REGISTRY}${SERVICE}:${VERSION}"
# Check if SERVICE and VERSION were extracted successfully
echo "Current Version: $VERSION"
echo "Current Service: $SERVICE"

# Run the build command for each changed service
if [[ $(ls "./${SERVICE}" | grep -c "Dockerfile") -gt 0 ]]; then
    printf "Building and pushing image for service: %s\n" "$SERVICE"
    # Build the Docker image
    docker build -t "$NEW_IMAGE_TAG" "./${SERVICE}"
    # Push the Docker image
    echo $GITLAB_REGISTRY_PAT | docker login -u "$GITLAB_USERNAME" --password-stdin "$DOCKER_REGISTRY"
    docker push "$NEW_IMAGE_TAG"
fi

# Update the k8s deployment file with new image version
MAIN_SERVICE_NAME=$(echo "$SERVICE" | grep -Eo '^[a-zA-Z0-9_]+')
K8S_FILE="k8s-config-files/${MAIN_SERVICE_NAME}-deployment.yaml"

if [[ -f "$K8S_FILE" ]]; then
    sed -i "s|image: .*${MAIN_SERVICE_NAME}:.*|image: ${NEW_IMAGE_TAG}|g" "$K8S_FILE"
    echo "Updated image version in $K8S_FILE"
else
    echo "Warning: K8s deployment file not found: $K8S_FILE"
fi