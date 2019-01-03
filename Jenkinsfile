pipeline {
  agent {
    node {
      label 'node'
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