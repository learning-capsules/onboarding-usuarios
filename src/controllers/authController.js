const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { generateAccessToken } = require('../libs/jwtUtils');
const userModel = require("../models/userModel")


// Simulación de base de datos en memoria
const authController = {
    registerUser: async (req, res) => {
        try {
            const { nombre, apellido, edad, correo, password, id_tipo_aprendizaje } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const response = await userModel.createUser(nombre, apellido, edad, correo, hashedPassword, id_tipo_aprendizaje)
            console.log(response)
            res.status(200).json({ mensaje: "Usuario registrado correctamente" })
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Error al registrar el usuario.' });

        }
    },
    loginUser: async (req, res) => {
        try {
            let { correo, password } = req.body
            const user = await userModel.getUser(correo)
            if (!user) {
                return res.status(401).json({ error: 'Credenciales inválidas.' });
            }
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ error: 'Credenciales inválidas.' });
            }
            const token = generateAccessToken(user);
            res.json({ token });
        } catch (error) {
            res.status(401).send('Credenciales inválidas.');
        }
    },
    // Otros métodos de controlador
};

module.exports = authController;