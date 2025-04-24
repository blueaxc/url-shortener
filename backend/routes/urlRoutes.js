const express = require('express');
const { shortenUrl, redirectUrl } = require('../controllers/urlController');

const router = express.Router();

// POST /api/shorten → shorten the URL
router.post('/shorten', shortenUrl);

// GET /:shortCode → redirect to original URL
router.get('/:code', redirectUrl);

module.exports = router;