const userModel = require('../models/userModel');

const usersController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userModel.getAllUsers();
            console.log("corneta")
            res.json(users); // Enviar la respuesta con los usuarios obtenidos
        } catch (error) {
            console.log("Error en getAllUsers:", error);
            res.status(500).json({ message: 'Error al obtener usuarios' });
        }
    },
    // Otros métodos de controlador
};

module.exports = usersController;