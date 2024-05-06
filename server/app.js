require('dotenv').config({path: "../.env"})

const express = require('express');
const searchRoutes = require('./routes/search');
const cheerioRoutes = require('./routes/cheerio');

const app = express();

app.use(express.json());

app.use('/search', searchRoutes);
app.use('/scrape', cheerioRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
