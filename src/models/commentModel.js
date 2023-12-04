const pool = require("../libs/index");

// Definir funciones para interactuar con la base de datos
const commentModel = {
  async getCommentsByYoutubeVideoId(youtubeVideoId) {
    const query = `SELECT * FROM comments where id_youtube_video = $1`;
    const values = [youtubeVideoId];

    try {
      const result = await pool.query(query, values);
      return result.rows;
    } catch (error) {
      console.error("Error getting comments:", error);
      throw error;
    }
  },
  async createComment(comment, youtubeVideoId, userId) {
    console.log("COMMENT ", comment);
    const query =
      "INSERT INTO comments (comment, id_youtube_video, id_usuario) VALUES ($1, $2, $3)";
    const values = [comment, youtubeVideoId, userId];

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error("Error creating comment:", error);
      throw error;
    }
  },
};

module.exports = commentModel;
