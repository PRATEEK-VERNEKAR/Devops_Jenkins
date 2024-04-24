node {
    stage('Checkout') {
        git branch: 'main', url: 'https://github.com/PRATEEK-VERNEKAR/Devops_Jenkins.git', credentialsId: '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A'
    }


  stage('Install Dependencies') {
    sh 'npm install'
  }

    stage('Test') {
        sh 'npm run test'
    }

  stage('Build') {
    sh 'npm run build'
  }

  stage('Deploy') {
    sh 'npm start'
  }
}


// node {
//     stage('Checkout') {
//         git branch: 'main', url: 'https://github.com/PRATEEK-VERNEKAR/Devops_Jenkins.git', credentialsId: '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A'
//     }

//     stage('Setup') {
//         nodejs('node-version') {
//             sh 'npm install'
//         }
//     }

//     stage('Test') {
//         nodejs('node-version') {
//             try {
//                 sh 'npm test'
//             } catch (err) {
//                 currentBuild.result = 'FAILURE'
//                 throw err
//             }
//         }
//     }

//     stage('Build') {
//         nodejs('node-version') {
//             sh 'npm run build'
//         }
//     }

//     stage('Deploy') {
//         nodejs('node-version') {
//             withEnv(['ENV_VAR=value']) {
//                 sh 'npm prune --production'
//                 sh 'deploy-script.sh'
//             }
//         }
//     }
// }