pipeline {
  agent none
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