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
        sh 'curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -'
        sh 'apt-get install nodejs'
      }
    }
  }
}