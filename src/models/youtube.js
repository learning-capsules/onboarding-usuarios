const { google } = require('googleapis');

const apiKey = 'AIzaSyA1Dv_DjMAZo_21I2do9rFgxPLibYEOiiQ';

const youtube = google.youtube({
    version: 'v3',
    auth: apiKey,
});

module.exports = youtube;