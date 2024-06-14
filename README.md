# prueba_angel_vegas

Dashboard de Gestión de Contratos
Este proyecto es un Dashboard de Gestión de Contratos construido con un enfoque full-stack, incorporando tanto el frontend como el backend en el mismo repositorio. El frontend está construido con React (usando Vite) y el backend con Node.js y Express. La aplicación obtiene datos de contratos desde una base de datos MySQL y los muestra en un formato tabular con entradas de búsqueda interactivas y botones de ordenación.

Tabla de Contenidos:
- Características
- Instalación
- Uso
- API
- Tecnologías Utilizadas
- Estructura del Proyecto
- Mejoras Futuras
- Licencia
  
Características
Obtención de datos de contratos desde una base de datos MySQL.
Búsqueda de contratos por origen, estado y cupón.
Ordenación de contratos por diferentes columnas (ID, Origen, Estado, Cupón) en orden ascendente y descendente.
Manejo de entradas con debounce para reducir llamadas a la API durante la búsqueda.
Separación del frontend y backend para modularidad.
Instalación
Prerrequisitos
Asegúrate de tener instalados los siguientes componentes:

Node.js (v14 o superior)
npm (v6 o superior)
Servidor MySQL

Pasos
Clona el repositorio:
bash
git clone https://github.com/Vegas-in/prueba_angel_vegas.git
cd prueba_angel_vegas

Instala las dependencias para el frontend y el backend:
bash
cd client
npm install
cd ../server
npm install

Configura la base de datos MySQL:
Crea una base de datos llamada test y una tabla llamada contratos con el esquema adecuado.
Actualiza el archivo .env en el directorio server con tus credenciales de la base de datos MySQL.

Inicia los servidores de desarrollo para el frontend y el backend:
bash

# En un terminal, inicia el frontend
cd client
npm run dev

# En otro terminal, inicia el backend
cd ../server
npm run dev

El frontend estará disponible en http://localhost:5173 y el backend en http://localhost:3000.

Uso
En la página principal, verás una tabla que lista todos los contratos obtenidos de la API.
Usa las entradas de búsqueda en la parte superior de cada columna para filtrar los contratos.
Haz clic en el botón de ordenación junto a cada encabezado de columna para ordenar los contratos por esa columna.

API
Endpoints
GET /api/contracts: Devuelve todos los contratos de la base de datos.
GET /api/contracts?cupon=<cupon>: Devuelve los contratos donde el campo cupon coincide con el parámetro dado.
GET /api/contracts?estado=<estado>: Devuelve los contratos donde el campo estado coincide con el parámetro dado.
GET /api/contracts?origen=<origen>: Devuelve los contratos donde el campo origen coincide con el parámetro dado.
Endpoint Opcional
POST /api/login: No implementado debido a restricciones de tiempo. Este endpoint manejaría la autenticación del usuario y requeriría un header de autenticación para los demás endpoints.

Tecnologías Utilizadas:

Frontend
React: Para construir la interfaz de usuario.
Vite: Para un desarrollo rápido.
CSS: Para el estilo de la aplicación.

Backend
Node.js: Para JavaScript del lado del servidor.
Express: Para construir la API REST.
Morgan: Para el registro de solicitudes HTTP.
Cors: Para habilitar el uso compartido de recursos de origen cruzado.
Helmet: Para asegurar los encabezados HTTP.
Nodemon: Para reiniciar automáticamente el servidor durante el desarrollo.
dotenv: Para gestionar variables de entorno.
MySQL: Para la base de datos.
mysql2: Para conectar a MySQL.

Estructura del Proyecto
contract-management-dashboard/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── Main.jsx
│   │   ├── index.js
│   │   ├── Main.css
│   ├── vite.config.js
│   ├── package.json
│   ├── README.md
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   ├── .env
│   ├── package.json
│   ├── README.md

client/: Contiene el código del frontend.
public/: Contiene los archivos públicos y el archivo HTML.
src/: Contiene el código fuente.
assets/: Contiene activos estáticos como imágenes, iconos, etc.
components/: Contiene los componentes de React.
App.jsx: El componente principal de la aplicación.
Main.jsx: El componente principal que maneja la obtención y renderización de contratos.
index.js: El punto de entrada de la aplicación React.
Main.css: El archivo CSS para el estilo de los componentes.
vite.config.js: Archivo de configuración de Vite.
server/: Contiene el código del backend.
controllers/: Contiene los controladores de la API.
models/: Contiene los modelos de la base de datos.
routes/: Contiene las rutas de la API.
index.js: El punto de entrada del servidor Node.js.
.env: Archivo de variables de entorno.

Mejoras Futuras:

- Agregar paginación para manejar eficientemente grandes conjuntos de datos.
- Implementar el endpoint de login para autenticación y asegurar otros endpoints.
- Mejorar el manejo de errores y mostrar mensajes amigables al usuario.
- Implementar pruebas unitarias tanto para el frontend como para el backend.
- Mejorar la UI/UX con mejor diseño y diseño responsivo.

Licencia
Este proyecto está licenciado bajo la Licencia MIT.
