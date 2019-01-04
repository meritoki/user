pipeline {
  agent {
    docker {
      image 'xenial'
    }

  }
  stages {
    stage('build') {
      steps {
        sh 'npm --version'
        sh 'ls'
        sh 'npm install package.json'
        sh 'node index.js'
      }
    }
  }
}