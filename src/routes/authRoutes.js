const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);

// Rutas protegidas
router.get('/protected', authMiddleware.verifyToken, (req, res) => {
    res.send('Ruta protegida');
});

module.exports = router;