pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = credentials('docker-registry')
        DOCKER_REPO_PAT = credentials('docker-repo-pat')
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh './Jenkins/upload_image.sh'
                echo 'Build stage completed.'
            }
        }
    }
}