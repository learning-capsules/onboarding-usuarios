// controllers/youtubeController.js
const youtube = require("../models/youtube");

const youtubeController = {
  getPlaylistVideos: async (req, res) => {
    console.log("youtube controller");
    const ID_playlist = req.params.id;
    console.log(typeof ID_playlist);
    console.log("ID PLAY EN CONTROLLER", ID_playlist);
    try {
      youtube.playlistItems.list(
        {
          part: "snippet",
          maxResults: 50, // Puedes ajustar el número de resultados si es necesario
          playlistId: ID_playlist,
        },
        (err, response) => {
          if (err) {
            console.error("Error al obtener la lista de reproducción:", err);
            return res
              .status(500)
              .json({ error: "Error al obtener la lista de reproducción" });
          }

          const videos = response.data.items;
          const videoInfo = videos.map((video) => ({
            title: video.snippet.title,
            videoId: video.snippet.resourceId.videoId,
          }));

          res.status(200).json({ videos: videoInfo });
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al encontrar lista." });
    }
  },
  getVideoInfo: async (req, res) => {
    const videoId = req.params.id;
    try {
      youtube.videos.list(
        {
          part: "snippet",
          id: videoId,
        },
        (err, response) => {
          if (err) {
            console.error("Error fetching video info:", err);
            return res.status(500).json({ error: "Error fetching video info" });
          }

          // Assuming only one video is being fetched
          const videoData = response.data.items[0].snippet;
          const videoInfo = {
            title: videoData.title,
            description: videoData.description,
          };

          res.status(200).json(videoInfo);
        }
      );
    } catch (error) {
      console.error("Server error:", error);
      res.status(500).json({ error: "Server error" });
    }
  },
};
module.exports = youtubeController;
