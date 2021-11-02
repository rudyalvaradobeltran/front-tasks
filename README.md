# Front Gestión de Tareas

Este proyecto fue realizado como prueba técnica para la postulación al cargo de frontend developer en Apiux.

## Instalación y pruebas

En el directorio principal del proyecto debemos correr el comando:

### `npm install`

Una vez instalado podemos echar a andar el proyecto con el comando:

### `npm run start`

El proyecto se ejecutará en el puerto 3000 que es el puerto por defecto.

Para correr los tests debemos ingresar el comando:

### `npm run test`

Para crear un build de la aplicación debemos ingresar el comando:

### `npm run build`



## Instalación con Docker compose

Para instalar con el yml es requisito tener Docker y Docker compose instalado, o sino solo con Docker podemos crear la imagen y correrla por separado.
En el directorio principal del proyecto debemos correr el comando de Docker compose:

### `docker-compose up -d`

La imagen y el contenedor serán creados y el proyecto estará disponible en el puerto 3000.



## Endpoints

- /tasks/save
- /tasks/list/:page
- /tasks/:id
- /tasks/remove/:id


## Configuración

Para configurar la ruta del backend debemos acceder al archivo .env ubicado en el directorio base. Dentro del directorio modificar el valor de la variable REACT_APP_API_URL.

## Backlog

- Centrar verticalmente contenedor de componentes principales.
- Adaptar a diseño responsive para diferentes dispositivos y orientaciones
- Testing de mensaje de éxito o error al guardar tarea
- Testing de click en botón editar debe redireccionar
- Testing de click en botón remover debe abrir confirmación
- Testing de click en botón cancelar debe cerrar confirmación
- Testing de mock servers en cada endpoint