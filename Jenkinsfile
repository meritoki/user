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
        sh 'cd user'
        sh 'git checkout 0.2'
      }
    }
  }
}