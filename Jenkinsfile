pipeline {
  agent any
  // keine skipDefaultCheckout-Option!
  stages {
    // KEIN stage('Checkout')
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
