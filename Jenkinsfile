pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                git credentialsId: 'github-credentials', url: 'https://github.com/hema8293/ci-pipeline-nodejs.git', branch: 'main'
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
        stage('Docker Build & Push') {
            steps {
                withDockerRegistry([credentialsId: 'DOCKER_CREDENTIAL_ID', url: '']) {
                    sh 'docker build -t hemapriyajd/node-ci-pipeline:latest .'
                    sh 'docker push hemapriyajd/node-ci-pipeline:latest'
                }
            }
        }
    }
}
