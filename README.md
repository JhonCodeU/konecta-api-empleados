```markdown
# API REST para la Gestión de Empleados

Esta API RESTful proporciona endpoints para la gestión de empleados y sus solicitudes asociadas. Está construida con Node.js y Express, y se conecta a una base de datos PostgreSQL para almacenar la información de los empleados y sus solicitudes.

## Requisitos

- Node.js
- TypeScript
- PostgreSQL
- npm (o yarn)

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/JhonCodeU/konecta-api-empleados.git
   cd konecta-api-empleados
   ```

2. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

   o si usas yarn:

   ```bash
   yarn install
   ```

## Configuración de la Base de Datos

1. Asegúrate de tener PostgreSQL instalado y corriendo en tu máquina local.

2. Crea una base de datos llamada `posgrest` o `gestion_empleados` en tu servidor PostgreSQL.

3. Ejecuta los scripts SQL proporcionados en `src/db/script.sql` para crear las tablas necesarias: `EMPLEADO`, `SOLICITUD`, y `USUARIO`.

4. Asegúrate de tener un usuario y contraseña configurados en PostgreSQL que coincidan con los datos de conexión en el archivo

## Configuración de Base de Datos con Docker y PostgresSQL

1. Descargar la imagen en docker de PostgresSQL: con este comando 
```bash
docker run -d --name image-postgres -e POSTGRES_PASSWORD=Admin2024* -p 5432:5432 postgres -c shared_buffers=256MB -c max_connections=200
```

2. Una vez conectado a psql, puedes crear un nuevo usuario (también llamado rol) con los datos que has proporcionado. Ejecuta los siguientes comandos SQL:
```sql
CREATE USER usuario01 WITH PASSWORD 'johncode2024*';
```

3. Ahora, debes concederle permisos al usuario para que pueda acceder a la base de datos postgres. Para otorgar permisos completos:
```sql
GRANT ALL PRIVILEGES ON DATABASE postgres TO usuario01;
```

4. Verificar que el usuario ha sido creado
```sql
\du
```

## Ejecución

1. Para ejecutar la aplicación en modo desarrollo:

   ```bash
   npm run dev
   ```

   Esto utilizará `nodemon` para reiniciar automáticamente la aplicación cuando se detecten cambios.

2. Para ejecutar la aplicación en modo producción:

   ```bash
   npm start
   ```

   Esto ejecutará la aplicación en el puerto definido en tu archivo `.env`.

## Endpoints Principales

### `/api/auth`

- `POST /api/auth/crear_usuario`: Crea un nuevo usuario.
- `POST /api/auth/generar_token`: Genera un token de acceso para autenticación.

### `/api/v1/employee`

- `GET /api/v1/get_employees`: Obtiene todos los empleados.
- `GET /api/v1/get_employee/:id`: Obtiene un empleado por su ID.
- `POST /api/v1/create_employee`: Crea un nuevo empleado.

### `/api/v1/request`

- `GET /api/v1/get_requests?employee_id={id}`: Obtiene las solicitudes de un empleado.
- `GET /api/v1/get_request/:id`: Obtiene una solicitud por su ID.
- `GET /api/v1/get_request_by_employee/:id`: Obtiene las solicitudes de un empleado específico.
- `POST /api/v1/create_request`: Crea una nueva solicitud.
- `PUT /api/v1/update_request`: Actualiza una solicitud existente.
- `DELETE /api/v1/delete_request/:id`: Elimina una solicitud por su ID.

## Documentación (Swagger)

La API está documentada con Swagger. Puedes acceder a la documentación y probar los endpoints en:

```
http://localhost:3000/api-docs
```

## Estructura del Proyecto

- `src/`: Contiene los archivos fuente de la aplicación.
  - `controllers/`: Controladores para manejar las peticiones HTTP.
  - `database/`: Configuración de la base de datos y scripts SQL.
  - `middlewares/`: Middlewares de autenticación.
  - `routes/`: Definición de las rutas de la API.
  - `index.ts`: Punto de entrada de la aplicación.

## Dependencias Principales

- `express`: Framework web para Node.js.
- `cors`: Middleware para habilitar CORS.
- `jsonwebtoken`: Generación y verificación de tokens JWT.
- `pg`: Cliente PostgreSQL para Node.js.
- `swagger-jsdoc`: Generación de documentación Swagger a partir de JSDoc.
- `swagger-ui-express`: Middleware para visualizar la documentación Swagger.

## Licencia

Este proyecto está bajo la licencia MIT.
```

Este README.md proporciona una visión general de tu API REST para la gestión de empleados, incluyendo los pasos de instalación, configuración de la base de datos, ejecución, endpoints principales, documentación Swagger, estructura del proyecto, dependencias principales, y detalles adicionales como la configuración del entorno y la contribución al proyecto. Asegúrate de ajustar los detalles específicos como el nombre de la base de datos, usuario y contraseña de PostgreSQL, y el token JWT secreto según tu configuración.