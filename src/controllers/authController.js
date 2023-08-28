const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { generateAccessToken } = require('../libs/jwtUtils');


// Simulación de base de datos en memoria
const usersInMemory = [];

const authController = {
    registerUser: async (req, res) => {
        try {
            const { username, email, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = {
                id: usersInMemory.length + 1,
                username,
                email,
                password: hashedPassword,
            }
            usersInMemory.push(newUser);
        } catch (error) {
            res.status(500).json({ error: 'Error al registrar el usuario.' });
        }
    },
    loginUser: async (req, res) => {
        try {
            let { email, password } = req.body
            const user = usersInMemory.find((user) => user.email === email);
            console.log(user)
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