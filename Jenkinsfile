pipeline {
  agent {
    node {
      label 'agent any'
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