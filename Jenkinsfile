pipeline {
    agent any

    environment {
        // Asegúrate de configurar estas credenciales en Jenkins (Manage Jenkins -> Credentials)
        // O defínelas aquí si son seguras (no recomendado para claves reales)
        BROWSERSTACK_USERNAME = credentials('browserstack-username')
        BROWSERSTACK_ACCESS_KEY = credentials('browserstack-access-key')
        BROWSERSTACK_APP_ID = 'bs://tu_app_id_generado' 
    }

    stages {
        stage('Clean') {
            steps {
                echo 'Limpiando workspace'
                deleteDir()
            }
        }

        stage('Checkout') {
            steps {
                // Reemplaza con tu URL de GitHub
                git branch: 'main', url: 'https://github.com/TU_USUARIO/TU_REPO.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Instala las dependencias del proyecto
                // Se usa 'npm ci' para instalaciones limpias en CI
                bat 'npm ci'
            }
        }

        stage('Test on BrowserStack') {
            steps {
                // Ejecuta las pruebas usando la configuración de BrowserStack
                bat 'npx wdio run ./wdio.browserstack.conf.js'
            }
        }

        stage('Report') {
            steps {
                echo "Generando reporte"
                bat "npx allure generate %ALLURE_RESULTS% -c -o %ALLURE_REPORT%"
            }
        }
    }

    post {
        always {
            // Genera y archiva el reporte de Allure
            script {
                allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
            }
        }
    }
}
