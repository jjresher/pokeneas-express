# Pokeneas Express API

Una API REST que proporciona información aleatoria sobre Pokeneas

## Requisitos Previos
- Node.js
- npm

## Instalación

1. Clona el repositorio:
```bash
git clone [url-del-repositorio]
```

2. Instala las dependencias:
```bash
npm install
```

## Uso

1. Inicia el servidor:
```bash
node index.js
```

2. El servidor estará disponible en: `http://localhost`

## Rutas Disponibles

### 1. Información Aleatoria
- **URL**: `/api/random`
- **Método**: GET
- **Respuesta**: JSON con información básica de un Pokenea aleatorio
  ```json
  {
    "id": 1,
    "name": "Drakonea",
    "height": "2.5m",
    "ability": "Llamarada Celestial",
    "containerId": "..."
  }
  ```

### 2. Imagen y Filosofía
- **URL**: `/api/image`
- **Método**: GET
- **Respuesta**: Página HTML mostrando:
  - Imagen del Pokenea
  - Frase filosófica
  - ID del contenedor

## Tecnologías Utilizadas
- Express.js
- Node.js
- Docker (preparado para contenedorización)

## Estructura del Proyecto
```
pokeneas-express/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── views/
├── index.js
├── package.json
└── Dockerfile
```
