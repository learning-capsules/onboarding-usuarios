const pool = require('../libs/index');

// Definir funciones para interactuar con la base de datos
const userModel = {
    async getAllUsers() {
        const query = `SELECT * FROM usuarios`;
        try {
            const result = await pool.query(query);
            return result.rows[0];
        } catch (error) {
            console.error('Error getting user by ID:', error);
            throw error;
        }
    },
    async createUser(username, password) {
        const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *';
        const values = [username, password];

        try {
            const result = await pool.query(query, values);
            return result.rows[0];
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    },
};

module.exports = userModel;