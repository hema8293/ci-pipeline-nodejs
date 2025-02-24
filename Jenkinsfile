pipeline {
    agent any

    environment {
        DOCKER_CREDENTIAL_ID = 'docker-hub-credentials' // Ensure Jenkins credentials are added
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t hemapriyajd/node-ci-pipeline:latest .'
            }
        }

        stage('Docker Login & Push') {
            steps {
                withDockerRegistry([credentialsId: DOCKER_CREDENTIAL_ID, url: '']) {
                    sh 'docker push hemapriyajd/node-ci-pipeline:latest'
                }
            }
        }
    }
}
 
