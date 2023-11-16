const videoModel = require('../models/videoModel');

const videosController = {
    getPlaylistIdyLearningType: async (req, res) => {
        console.log("llego")
        try {
            const learningTypeId  = req.params.learningTypeId;
            const url = await videoModel.getPlaylistIdyLearningType(learningTypeId);
            res.json(url[0].url); // Enviar la respuesta con los usuarios obtenidos
        } catch (error) {
            console.log("Error en getAllUsers:", error);
            res.status(500).json({ message: 'Error al obtener usuarios' });
        }
    }
};

module.exports = videosController;