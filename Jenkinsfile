pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        // Jenkins klont deine main-Branch von GitHub
        git branch: 'main', url: 'https://github.com/ryn1337/webdev1.git'
      }
    }

    stage('Build') {
      steps {
        // Baut alle Images, die in der docker-compose.yml definiert sind
        sh 'docker compose build'
      }
    }

    stage('Test') {
      steps {
        // Startet den Container "backend" und führt "npm test" aus
        sh 'docker compose run backend npm test'
      }
    }

    stage('Deploy') {
      steps {
        // Startet alle Services (Backend, Frontend, DB etc.) im Hintergrund
        sh 'docker compose up -d'
      }
    }
  }
}
