pipeline {
    agent any
    options {
        // Verhindert den automatischen "Declarative: Checkout SCM"
        skipDefaultCheckout(true)
    }

    stages {
        stage('Checkout') {
            steps {
                // Hier selbst "main" klonen:
                git branch: 'main', url: 'https://github.com/ryn1337/webdev1.git'
            }
        }

        stage('Build') {
            steps {
                // Docker Compose Build
                sh 'docker compose build'
            }
        }

        stage('Test') {
            steps {
                // Docker Compose Run für "backend" + npm test
                sh 'docker compose run backend npm test'
            }
        }

        stage('Deploy') {
            steps {
                // Docker Compose Up => startet alle Container im Hintergrund
                sh 'docker compose up -d'
            }
        }
    }
}
