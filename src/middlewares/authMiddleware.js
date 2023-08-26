const jwt = require('jsonwebtoken');

const middleWares = {
    verifyToken: async (req, res) => {
        try {
            res.json({ message: 'se verifico el token' });
        } catch (error) {
            console.log("Error en getAllUsers:", error);
            res.status(500).json({ message: 'Error verificar token' });
        }
    },
};

module.exports = middleWares;