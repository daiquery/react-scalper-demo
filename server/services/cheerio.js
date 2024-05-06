const cheerio = require('cheerio');
const axios = require('axios');

async function scrapeMostImportantInfo(searchResults, term) {
    try {
        const mostImportantData = [];
        for (const result of searchResults) {
            console.log("reached here: ", result)
            const response = await axios.get(result.url);
            const $ = cheerio.load(response.data);
            const relevantData = $('body').text(); 
            if (relevantData.includes(term)) {
                mostImportantData.push({
                    title: result.title,
                    url: result.url,
                    data: relevantData
                });
            }
        }
        return mostImportantData;
    } catch (error) {
        throw new Error(`Error scraping data: ${error.message}`);
    }
}

module.exports = { scrapeMostImportantInfo };
