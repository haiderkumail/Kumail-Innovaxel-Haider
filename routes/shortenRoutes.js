const express = require('express');
const router = express.Router();
const shortenController = require('../controllers/shortenController');

// Create new short URL
router.post('/', shortenController.createShortUrl);

// Get original URL
router.get('/:shortCode', shortenController.getOriginalUrl);

// Update short URL
router.put('/:shortCode', shortenController.updateShortUrl);

// Delete short URL
router.delete('/:shortCode', shortenController.deleteShortUrl);

// Get stats
router.get('/:shortCode/stats', shortenController.getUrlStats);

module.exports = router;
