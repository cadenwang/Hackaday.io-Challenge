require('dotenv').config();

module.exports = {
    hackaday: {
        host: 'http://api.hackaday.io/v1',
        apiKey: process.env.HACKADAY_API_KEY,
        timeout: 1000
    }
};
