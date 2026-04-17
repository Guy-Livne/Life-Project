pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh './Jenkins/upload_image.sh'
                echo 'Build stage completed.'
            }

    }
}