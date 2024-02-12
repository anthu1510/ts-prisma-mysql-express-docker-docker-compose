pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                // Run npm install to install dependencies
                sh 'npm install'
            }
        }
        stage('build') {
            steps {
                 // build typescript to js
                sh 'npm run build'
            }
        }
        stage('Run Api') {
            steps {
                // Run Build folder file
                sh 'npm start'
            }
        }
    }
}