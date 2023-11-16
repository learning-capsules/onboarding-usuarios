const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const youtubeController = require('../controllers/youtubeControllers')

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.get('/playlist/:id', youtubeController.getPlaylistVideos);

// Rutas protegidas
router.get('/protected', authMiddleware.verifyToken, (req, res) => {
    res.send('Ruta protegida');
});

module.exports = router;