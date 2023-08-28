const jwt = require('jsonwebtoken');

// Cambia esta clave secreta por una más segura en producción
const secretKey = 'secretKey';

exports.generateAccessToken = (user) => {
    return jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
};