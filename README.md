https://github.com/mompo98/DockerFinal

# Implementación de la Configuración Docker y Documentación del Proyecto

Este repositorio contiene la implementación de la configuración Docker para un proyecto que consta de backend, frontend, un servidor de MongoDB y un balanceador de carga Nginx. También se proporciona documentación detallada sobre cómo poner en marcha el proyecto utilizando Docker Compose.

## Pasos Realizados:

### Estructura del Proyecto:

El proyecto está organizado en los siguientes directorios: backend, frontend, mongo, loadbalancer.

Cada directorio contiene los archivos necesarios para ejecutar la respectiva parte del proyecto.

### Configuración de Docker:

Se ha creado un archivo Dockerfile en los directorios backend y frontend para construir las imágenes Docker de estas partes del proyecto.

Se ha creado un archivo docker-compose.yml en el directorio raíz del proyecto para orquestar los contenedores Docker.

### Configuración de MongoDB:

Se ha incluido un script mongo-init.js para inicializar la base de datos MongoDB con datos iniciales.

Se ha creado un script mongorestore.sh para restaurar una copia de seguridad de la base de datos MongoDB.

### Configuración de Nginx:

Se ha incluido un archivo de configuración nginx.conf en el directorio loadbalancer para configurar el balanceador de carga Nginx.

## Documentación del Proyecto:

Se ha creado un archivo README.md en la raíz del repositorio GitHub para documentar los pasos de implementación y poner en marcha el proyecto.

Se han incluido instrucciones detalladas sobre cómo construir y ejecutar los contenedores Docker utilizando Docker Compose.

### Puesta en Marcha del Proyecto:

Para poner en marcha el proyecto, sigue estos pasos:

Clona este repositorio en tu máquina local.

Asegúrate de tener Docker y Docker Compose instalados en tu sistema.

Desde la raíz del proyecto, ejecuta el siguiente comando para construir y ejecutar los contenedores Docker:

docker-compose up --build

Una vez que los contenedores estén en ejecución, podrás acceder a la aplicación desde tu navegador web utilizando la URL correspondiente al balanceador de carga Nginx.
