const { Pool } = require('pg');

// Configuración de la conexión a la base de datos
const pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'learning_capsule',
    password: 'admin',
    port: 5432, // Puerto de PostgreSQL
});

module.exports = pool;