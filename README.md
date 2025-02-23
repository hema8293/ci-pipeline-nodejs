# 🛠️ CI Pipeline for Node.js Project

## 📌 Mid-Term Practical - CI Pipeline with GitHub Actions

### ✅ Project Overview
This project demonstrates a Continuous Integration (CI) pipeline using **GitHub Actions** and **Docker**. It automates building, testing, and deploying a Node.js application.

### ✅ Features
- **GitHub Actions** for automated builds and tests.
- **Jest Unit Testing** with at least **4 test cases**.
- **Docker Integration** with **Docker Hub**.
- **Jenkins (Bonus Task)** for CI/CD automation.

---

## 📁 **Project Folder Structure**

/ci-pipeline-nodejs │── .github/workflows/ci.yml # GitHub Actions workflow │── Dockerfile # Docker build configuration │── index.js # Main application file │── package.json # Project dependencies │── package-lock.json # Dependency lock file │── server.js # Express server │── test/app.test.js # Jest test cases │── README.md # Project documentation


---

## **🚀 Setup & Installation**
Follow these steps to **set up and run** the project:

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/hema8293/ci-pipeline-nodejs.git
cd ci-pipeline-nodejs

2. Install Dependencies

npm install

3.  Run Tests

npm test

3. Build Docker Image

docker build -t hemapriyajd/node-ci-pipeline:latest .

4. Push Docker Image to Docker Hub

docker push hemapriyajd/node-ci-pipeline:latest

5. Run Locally using Docker

docker run -p 3000:3000 hemapriyajd/node-ci-pipeline:latest

📌 GitHub Actions Workflow
The CI pipeline is automated using GitHub Actions. Every time new code is pushed, it: ✅ Builds the project
✅ Runs unit tests
✅ Publishes the Docker image (if tests pass)

.github/workflows/ci.yml

name: Node.js CI with Docker

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Run Jest Tests
        run: npx jest --ci

  docker:
    runs-on: ubuntu-latest
    needs: test
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Log in to Docker Hub
        uses: docker/login-action@v2
        with:
          username: "hemapriyajd"
          password: ${{ secrets.DOCKER_PASSWORD }}

      - name: Build Docker image
        run: docker build -t hemapriyajd/node-ci-pipeline:latest .

      - name: Push Docker image
        run: docker push hemapriyajd/node-ci-pipeline:latest


🛠️ Jenkins Pipeline (Bonus Task)
If you are using Jenkins for CI/CD, follow these steps:

1️⃣ Install Jenkins Plugins
Install Pipeline Plugin
Install Docker Pipeline Plugin

2️⃣ Create a Pipeline Job
Open Jenkins Dashboard → Click New Item.
Select Pipeline → Click OK.
Scroll down to the Pipeline section → Choose Pipeline Script.

3️⃣ Add This Jenkinsfile Script

pipeline {
    agent any
    stages {
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
                sh 'docker build -t hemapriyajd/node-ci-pipeline:latest .'
                sh 'docker push hemapriyajd/node-ci-pipeline:latest'
            }
        }
    }
}


