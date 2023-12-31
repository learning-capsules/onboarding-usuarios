const commentModel = require("../models/commentModel");

const commentsController = {
  getCommentByYoutubeVideoId: async (req, res) => {
    try {
      const videoId = req.params.youtubeVideoId;

      const comments = await commentModel.getCommentsByYoutubeVideoId(videoId);
      res.json(comments); // Enviar la respuesta con los usuarios obtenidos
    } catch (error) {
      console.log("Error en getCommentByYoutubeVideoId:", error);
      res.status(500).json({ message: "Error al obtener comentarios" });
    }
  },
  createComment: async (req, res) => {
    try {
      console.log("bdy", req.body);
      const { commentText, videoId, userId, userName, userLastName } = req.body;

      const comments = await commentModel.createComment(
        commentText,
        videoId,
        userId,
        userName,
        userLastName
      );
      res.json(comments); // Enviar la respuesta con los usuarios obtenidos
    } catch (error) {
      console.log("Error en getAllUsers:", error);
      res.status(500).json({ message: "Error al obtener usuarios" });
    }
  },
};

module.exports = commentsController;
