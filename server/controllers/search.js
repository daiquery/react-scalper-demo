const { googleSearch } = require('../services/search');

async function search(req, res) {
    try {
        const term = req.query.term;
        const searchResults = await googleSearch(term);
        res.json({ data: searchResults });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { search };
