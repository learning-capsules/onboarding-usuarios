const pool = require('../libs/index');

const videoModel = {
    async getPlaylistIdyLearningType(id_tipo_aprendizaje) {
        const query = 'SELECT url FROM videos WHERE id_tipo_aprendizaje = $1';
        const values = [id_tipo_aprendizaje];

        try {
            const result = await pool.query(query, values);
            return result.rows;
        } catch (error) {
            console.error('Error getting videos by learning type:', error);
            throw error;
        }
    }
};

module.exports = videoModel;
