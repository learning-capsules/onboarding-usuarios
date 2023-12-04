const pool = require("../libs/index");

// Definir funciones para interactuar con la base de datos
const commentModel = {
  async getCommentsByYoutubeVideoId(youtubeVideoId) {
    const query = `SELECT * FROM comments where id_youtube_video = $1`;
    const values = [youtubeVideoId];

    try {
      const result = await pool.query(query, values);
      console.log(result.rows)
      return result.rows;
    } catch (error) {
      console.error("Error getting comments:", error);
      throw error;
    }
  },
  async createComment(comment, youtubeVideoId, userId, userName, userLastName) {
    console.log("COMMENT ", comment);
    const query =
      "INSERT INTO comments (comment, id_youtube_video, id_usuario, username, lastname) VALUES ($1, $2, $3, $4, $5)";
    const values = [comment, youtubeVideoId, userId, userName, userLastName];

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
