const express = require('express');
const router = express.Router();
const cheerioController = require('../controllers/cheerio');

router.get('/', cheerioController.scrape);

module.exports = router;