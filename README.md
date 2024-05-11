# Node Scalper
Uses the Google Programmable Search Engine & API along with Cheerio.js to extract HTML/XML data from pages
relating to the searched term.








## Usage

**node app.js** 
*Start the server*

## Current Routes

**/scrape** is the main route, taking in a **term**, which will be the person you are looking for. (e.g /scrape?term=John Doe). The function attached will take in the search results from */search*, which in turn Axios will GET the page's content that will be then parsed by Cheerio in order to return relevant data. 

**/search** is mainly used by */scrape* to return sites from the Google Search API to be fed into Axios.