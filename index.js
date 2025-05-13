// index.js
require('dotenv').config(); // Cargar variables de entorno desde .env

const express = require('express');
const app = express();
const port = 80;
const pokeneaRoutes = require('./src/routes/pokeneaRoutes');

app.use(pokeneaRoutes);

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo salió mal!' });
});

app.listen(port, '0.0.0.0', () => {
    console.log("Server is listening on port 80");
    console.log("- http://localhost");
});

