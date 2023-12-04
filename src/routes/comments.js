const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/commentsController");
const authMiddleware = require("../middlewares/authMiddleware");
router.get("/:youtubeVideoId", commentsController.getCommentByYoutubeVideoId);
router.post("/:youtubeVideoId", commentsController.createComment);
// router.get("/url/:learningTypeId", videosController.getPlaylistIdyLearningType);
// router.get("/:id", youtubeController.getVideoInfo);

// Rutas protegidas
router.get("/protected", authMiddleware.verifyToken, (req, res) => {
  res.send("Ruta protegida");
});

module.exports = router;
