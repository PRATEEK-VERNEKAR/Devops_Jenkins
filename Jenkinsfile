node {
  stage('Checkout') {
    git 'https://github.com/your-username/project-name.git'
  }

  stage('Install Dependencies') {
    sh 'npm install'
  }

  stage('Test') {
    sh 'npm test'
  }

  stage('Build') {
    sh 'npm run build'
  }

  stage('Deploy') {
    sh 'npm start'
  }
}