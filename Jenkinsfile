pipeline {
  agent any
  options {
    // Deaktiviert das automatische 'Declarative: Checkout SCM'
    skipDefaultCheckout(true)
  }

  stages {
    stage('Checkout') {
      steps {
        // Hier wird nur dein Branch 'main' geholt
        git branch: 'main', url: 'https://github.com/ryn1337/webdev1.git'
      }
    }

    stage('Build') {
      steps {
        sh 'docker compose build'
      }
    }

    stage('Test') {
      steps {
        sh 'docker compose run backend npm test'
      }
    }

    stage('Deploy') {
      steps {
        sh 'docker compose up -d'
      }
    }
  }
}
