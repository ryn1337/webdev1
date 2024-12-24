pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        // Jenkins klont dein Repo
        git 'https://github.com/ryn1337/webdev1.git'
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
        // Startet Backend im Container + führt "npm test" aus
        // (falls du einen Test-Script in package.json hast)
        sh 'docker compose run backend npm test'
      }
    }

    stage('Deploy') {
      steps {
        // Docker Compose Up => startet alle Container (Backend, Frontend, DB, etc.)
        sh 'docker compose up -d'
      }
    }
  }
}
