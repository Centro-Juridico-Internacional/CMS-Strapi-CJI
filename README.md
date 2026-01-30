# 🗄️ CMS Strapi CJI - Backend

Este es el sistema de gestión de contenidos (CMS) y API del proyecto **CMS Strapi CJI**, potenciado por **Strapi v5**. Actúa como la fuente de verdad para todos los datos que consume el frontend.

## 🏗️ Arquitectura & Tecnologías

- **[Strapi v5](https://strapi.io/)**: Headless CMS extensible basado en Node.js.
- **Base de Datos**:
  - **Dev**: SQLite (rápido, sin configuración, archivo `.tmp/data.db`).
  - **Prod**: Soporte nativo para PostgreSQL, MySQL o MariaDB.
- **API REST**: Expone endpoints automáticos para cada colección de contenido.
- **Plugins Activos**:
  - `users-permissions`: Gestión de roles y tokens de acceso.
  - `cloud`: Integración con Strapi Cloud (si aplica).

## 📂 Estructura del Proyecto

```text
backend/
├── config/              # Configuración del servidor, base de datos y plugins
├── src/
│   ├── api/             # Definición de Modelos (Content-Types)
│   │   ├── new/         # Colección 'Noticias' (ruoutes, controllers, services)
│   │   ├── author/      # Colección 'Autores'
│   │   └── ...          # Otras colecciones
│   ├── admin/           # Personalización de la UI del panel
│   └── extensions/      # Extensiones de plugins del core
├── public/              # Archivos estáticos subidos (solo en dev/local)
├── scripts/             # Scripts de utilidad (ej. seed.js)
└── .env                 # Variables de entorno (NO compartir)
```

## 🛠️ Guía de Desarrollo

### 1. Variables de Entorno (`.env`)

Configura las claves de seguridad esenciales.

```ini
HOST=0.0.0.0
PORT=1337
APP_KEYS="keyA,keyB,keyC,keyD"
API_TOKEN_SALT="salt_random"
ADMIN_JWT_SECRET="secret_random"
JWT_SECRET="jwt_random"
```

### 2. Comandos Clave

| Comando                | Descripción                                                                          |
| :--------------------- | :----------------------------------------------------------------------------------- |
| `npm run develop`      | **Modo Desarrollo.** Inicia el servidor con recarga automática. Admin en `/admin`.   |
| `npm run start`        | **Modo Producción.** Inicia el servidor optimizado (requiere `build` previo).        |
| `npm run build`        | Compila el panel de administración. Obligatorio antes de desplegar.                  |
| `npm run seed:example` | **Poblar Datos.** Ejecuta el script `./scripts/seed.js` para cargar datos de prueba. |

### 3. Probando la API (`api.rest`)

En la raíz del monorepositorio encontrarás un archivo `api.rest`.

- Este archivo permite probar los endpoints directamente desde VS Code (requiere la extensión "REST Client").
- Úsalo para verificar que los datos están retornando correctamente antes de integrarlos en el frontend.

## 🔐 Autenticación & Permisos

### Roles Públicos vs. Autenticados

Por defecto, Strapi bloquea todos los endpoints públicos. Para que el frontend funcione:

1.  Ve a **Settings > Users & Permissions Plugin > Roles > Public**.
2.  Marca las acciones `find` y `findOne` para las colecciones que deben ser visibles (ej. `News`, `Category`).

### API Tokens (Recomendado)

Para mayor seguridad, usa API Tokens en lugar de abrir permisos públicos:

1.  Ve a **Settings > Global Settings > API Tokens**.
2.  Crea un token (Tipo: `Read-Only`).
3.  Usa este token en el `Authorization` header (`Bearer <token>`) de tus peticiones (o en la config del frontend).

## 🧐 Solución de Problemas (Troubleshooting)

**1. El panel de admin se queda cargando en blanco**

- Ejecuta `npm run build` y luego intenta iniciar de nuevo. A veces es necesario recompilar el panel tras actualizaciones.

**2. Error "Knex: Timeout acquiring a connection"**

- Si usas SQLite, asegúrate de que el archivo `.tmp/data.db` no esté bloqueado o corrupto. Eliminar la carpeta `.tmp` reiniciará la base de datos (¡Perderás los datos!).

**3. Imágenes rotas en el frontend**

- En desarrollo, las imágenes se sirven desde `localhost:1337/uploads`. Asegúrate de que el frontend tenga acceso a esta URL.
- En producción, configura un proveedor de upload (AWS S3, Cloudinary) para persistencia.

## 📦 Despliegue en Producción

Jamás uses SQLite en un entorno de servidor efímero (como Heroku, Vercel, o instancias sin disco persistente), ya que perderás todo el contenido al reiniciar.

- **Base de Datos**: Usa PostgreSQL (ej. Supabase, Neon, AWS RDS).
- **Archivos**: Configura `@strapi/provider-upload-cloudinary` o S3.
