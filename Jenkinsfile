pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'JENKINS_NODE_COOKIE=dontKillMe node index.js &'
      }
    }
    stage('Test') {
      steps {
        sh 'sudo npm install newman -g'
        sh 'newman run ./postman/user-service-2.0.postman_collection.json --reporters cli,junit --reporter-junit-export newman.xml --insecure'
      }
    }
    stage('Deploy') {
      steps {
        sh 'mkdir -p /home/jorodriguez/meritoki/dailybread/'
        sh 'sudo rm -rf user'
        sh 'sudo git clone -b dev https://github.com/meritoki/user.git'
        sh 'cd user'
        sh 'git branch -a'
        sh 'git status'
        sh 'docker stop user-service || true && docker rm user-service || true'
        sh 'docker rmi $(docker images |grep \'dailybread/user-service\') || true'
        sh 'docker build -t dailybread/user-service .'
        sh 'sudo docker run --network host -dlt --restart unless-stopped --name user-service -p 3000:3000 dailybread/user-service'
      }
    }
  }
  triggers {
    cron('H/15 * * * *')
  }
}
