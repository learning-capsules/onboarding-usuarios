const express = require('express');
const router = express.Router();
const youtubeController = require('../controllers/youtubeControllers')
const videosController = require('../controllers/videosController');
const authMiddleware = require('../middlewares/authMiddleware');
router.get('/playlist/:id', youtubeController.getPlaylistVideos);
router.get('/url/:learningTypeId', videosController.getPlaylistIdyLearningType)

// Rutas protegidas
router.get('/protected', authMiddleware.verifyToken, (req, res) => {
    res.send('Ruta protegida');
});

module.exports = router;