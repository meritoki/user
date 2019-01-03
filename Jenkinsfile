pipeline {
  agent {
    docker {
      image 'node:6.3'
    }

  }
  stages {
    stage('build') {
      steps {
        sh '''sh echo "helloworld" && cd user && git checkout 0.2 && npm install
'''
      }
    }
  }
}