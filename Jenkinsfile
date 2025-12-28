pipeline {
    agent any

    environment {
        IMAGE_NAME = "suhail4545/backend-api"
        IMAGE_TAG  = "latest"
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build & Push via Docker CLI container') {
            steps {
                sh '''
                  docker run --rm \
                    -v /var/run/docker.sock:/var/run/docker.sock \
                    -v $(pwd):/workspace \
                    -w /workspace \
                    docker:26.1 \
                    sh -c "
                      docker build -t $IMAGE_NAME:$IMAGE_TAG .
                    "
                '''
            }
        }
    }
}
