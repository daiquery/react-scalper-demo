const axios = require('axios');
const config = require('../config');

async function googleSearch(term) {
    try {
        const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${config.GOOGLE_API_KEY}&cx=${config.SEARCH_ENGINE_ID}&q=${encodeURIComponent(term)}`;
        const response = await axios.get(apiUrl);
        if (response.data.items) {
            return response.data.items.map(item => ({
                title: item.title,
                url: item.link
            }));
        } else {
            return [];
        }
    } catch (error) {
        throw new Error(`Error searching: ${error.message}`);
    }
}

module.exports = { googleSearch };
