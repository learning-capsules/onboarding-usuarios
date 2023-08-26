const authController = {
    login: async (req, res) => {
        try {
            res.json({ message: 'Usuario inicio sesion' });
        } catch (error) {
            console.log("Error en getAllUsers:", error);
            res.status(500).json({ message: 'Error al iniciar sesion' });
        }
    },
    register: async (req, res) => {
        try {
            res.json({ message: 'Usuario registrado' });
        } catch (error) {
            console.log("Error en getAllUsers:", error);
            res.status(500).json({ message: 'Error al registrar usuario' });
        }
    },
    // Otros métodos de controlador
};

module.exports = authController;