const pool = require('../libs/index');

// Definir funciones para interactuar con la base de datos
const userModel = {
    async getAllUsers() {
        const query = `SELECT * FROM usuarios`;
        try {
            const result = await pool.query(query);
            return result.rows;
        } catch (error) {
            console.error('Error getting user by ID:', error);
            throw error;
        }
    },
    async createUser(nombre, apellido, edad, correo, password, id_tipo_aprendizaje) {
        const query = 'INSERT INTO usuarios (nombre, apellido, edad, correo, password, id_tipo_aprendizaje) VALUES ($1, $2, $3, $4, $5, $6 ) RETURNING *';
        const values = [nombre, apellido, edad, correo, password, id_tipo_aprendizaje];

        try {
            const result = await pool.query(query, values);
            return result.rows[0];
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    },
    async getUser(correo) {
        const query = ' SELECT * FROM usuarios WHERE correo = $1';
        const values = [correo]
        try {
            const result = await pool.query(query, values);
            console.log(result)
            return result.rows[0];
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    }
};

module.exports = userModel;