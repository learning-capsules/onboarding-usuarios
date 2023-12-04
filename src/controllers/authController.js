const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { generateAccessToken } = require('../libs/jwtUtils');
const userModel = require("../models/userModel")


// Simulación de base de datos en memoria
const authController = {
    registerUser: async (req, res) => {
        try {
            const { nombre, apellido, edad, correo, password, id_tipo_aprendizaje } = req.body;

            // Verificar si el correo ya existe en la base de datos
            const existingUser = await userModel.getUserByEmail(correo);

            if (existingUser) {
                // Si el usuario ya existe, enviar un mensaje de error
                return res.status(409).json({ error: 'El correo electrónico ya está registrado.' });
            }

            // Si el correo no existe, continuar con el registro del usuario
            const hashedPassword = await bcrypt.hash(password, 10);
            const response = await userModel.createUser(nombre, apellido, edad, correo, hashedPassword, id_tipo_aprendizaje);
            console.log(response);
            res.status(200).json({ mensaje: 'Usuario registrado correctamente' });
        } catch (error) {
            console.error(error);
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
            console.log("usuario", user)
            const token = generateAccessToken(user);
            const learningTypeId = user.id_tipo_aprendizaje;
            res.json({ token, learningTypeId });
        } catch (error) {
            res.status(401).send('Credenciales inválidas.');
        }
    },
    // Otros métodos de controlador
};

module.exports = authController;