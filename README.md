https://github.com/mompo98/DockerFinal
# Mi Proyecto con Docker Compose

## Descripción
Este proyecto utiliza Docker Compose para gestionar y orquestar los contenedores de las diferentes partes de la aplicación.

## Requisitos
- Docker
- Docker Compose

## Configuración
1. Clona este repositorio en tu máquina local.
2. Asegúrate de tener Docker y Docker Compose instalados en tu sistema.
3. Configura las variables de entorno según se indique en el archivo `.env`.

## Uso
1. En el directorio raíz del proyecto, ejecuta `docker-compose up -d` para iniciar todos los servicios en segundo plano.
2. Accede a la aplicación en tu navegador web usando la URL proporcionada por el servicio correspondiente (por ejemplo, http://localhost:8080).

## Personalización
- Si necesitas personalizar la configuración de algún servicio, puedes modificar los archivos de configuración de Docker Compose en el directorio `docker-compose`.
