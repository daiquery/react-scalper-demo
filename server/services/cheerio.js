const cheerio = require('cheerio');
const axios = require('axios');

async function scrapeMostImportantInfo(searchResults, term) {
    try {
        const mostImportantData = [];
        for (const result of searchResults) {

            console.log("reached here: ", result)
            const response = await axios.get(result.url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'} });
            const $ = cheerio.load(response.data);
            const relevantData = $('body').text().trim().replace(/\n/g,'');

            if (relevantData.includes(term)) {
                mostImportantData.push({
                    title: result.title,
                    url: result.url,
                    data: relevantData
                });
            }

            console.log("most important: ", mostImportantData)
        }
        return mostImportantData;
    } catch (error) {
        throw new Error(`Error scraping data: ${error.message}`);
    }
}

module.exports = { scrapeMostImportantInfo };


// wherever name mentioned extract parent node and highest parent
// go to node and go to outer parent
