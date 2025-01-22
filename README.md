# MICROSERVICIOS
# Este proyecto implementa un sistema de autenticación (Auth Service) y un servicio de gestión de productos (Products Service) basado en microservicios. Los servicios están contenedorizados con Docker y se comunican a través de una red compartida.

## 1. Estructura del Proyecto
 /practica
│
├── /auth-service/
│   - Lógica para registro de usuarios, inicio de sesión y verificación de tokens.
│
├── /products-service/
│   - Gestión de productos: creación y consulta de productos protegidos por autenticación.
│
├── docker-compose.yml
│   - Configuración de Docker Compose para levantar los servicios en contenedores separados.
│
└── README.md
    - Documentación del proyecto.
2. Pre-requisitos
Tener instalados:
Docker: Descargar Docker.
Docker Compose: Incluido con Docker Desktop.
Postman o cURL para probar la API.
Opcional: un editor de texto o IDE como Visual Studio Code.

3. Configuración Inicial
Navega a la carpeta del proyecto practica.
Limpia y reinstala los paquetes de Node.js para evitar problemas:
Elimina las carpetas node_modules y los archivos package-lock.json en las carpetas:
bash
Copiar
Editar
/auth-service
/products-service
Ejecuta los siguientes comandos dentro de cada carpeta:
npm cache clean --force
npm install
4. Ejecutar la Práctica
Iniciar los servicios con Docker Compose:
docker-compose up --build
Verificar que los servicios estén corriendo:

Auth Service: http://localhost:4000
Products Service: http://localhost:5000
5. Pruebas
Usa Postman o cURL para probar los servicios. Los endpoints disponibles son:

# 1. Registro de Usuario
Método: POST
URL: http://localhost:4000/auth/register
Cuerpo (JSON):
json
{
  "username": "testuser",
  "password": "123456"
}
# 2. Inicio de Sesión
Método: POST
URL: http://localhost:4000/auth/login
Cuerpo (JSON):
json
{
  "username": "testuser",
  "password": "123456"
}
Respuesta:
Recibirás un token en el campo token:
json
{
  "token": "eyJhbGciOiJIUzI1Ni..."
}
# 3. Crear Producto
Método: POST
URL: http://localhost:5000/products
Encabezados:
makefile

Authorization: Bearer <TOKEN>
Cuerpo (JSON):
json
Copiar
Editar
{
  "name": "Producto A",
  "price": 100
}
# 4. Obtener Productos
Método: GET
URL: http://localhost:5000/products
Encabezados:
makefile
Authorization: Bearer <TOKEN>
# 6. Problemas Comunes
Error: "MongoDB connection failed"

Verifica que el contenedor mongo esté funcionando correctamente:

docker logs mongo
Token inválido o no proporcionado

Asegúrate de enviar un token válido en los encabezados de las solicitudes protegidas.
Docker no funciona

Verifica que Docker esté instalado y corriendo:

docker --version
# 7. Licencia
RedDevils™