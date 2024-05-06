const { scrapeMostImportantInfo } = require('../services/cheerio');
const { googleSearch } = require('../services/search');

async function scrape(req, res) {
    try {
        const term = req.query.term;
        console.log(`starting. term: ${term}`)

        const searchResults = await googleSearch(term);
        console.log(`returned: ${[...searchResults]}`)
        const scrapedData = await scrapeMostImportantInfo(searchResults, term);
        console.log(`scraped: ${scrapedData}`)
        res.json({ data: scrapedData });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { scrape };
