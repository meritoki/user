pipeline {
  agent {
    docker {
      image 'node:8-alpine'
    }

  }
  stages {
    stage('build') {
      steps {
        sh 'npm --version'
        sh 'ls'
        sh 'npm install'
        sh 'node index.js'
      }
    }
  }
}