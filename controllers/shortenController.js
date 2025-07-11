const ShortUrl = require('../models/ShortUrl');
const shortid = require('shortid');

// Create
exports.createShortUrl = async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  const shortCode = shortid.generate();
  const shortUrl = new ShortUrl({
    url,
    shortCode,
    createdAt: new Date(),
    updatedAt: new Date(),
    accessCount: 0
  });

  await shortUrl.save();
  res.status(201).json(shortUrl);
};

// Retrieve
exports.getOriginalUrl = async (req, res) => {
  const { shortCode } = req.params;
  const shortUrl = await ShortUrl.findOne({ shortCode });

  if (!shortUrl) return res.status(404).json({ error: 'Not found' });

  shortUrl.accessCount++;
  await shortUrl.save();

  res.json(shortUrl);
};

// Update
exports.updateShortUrl = async (req, res) => {
  const { shortCode } = req.params;
  const { url } = req.body;

  if (!url) return res.status(400).json({ error: 'URL is required' });

  const shortUrl = await ShortUrl.findOne({ shortCode });
  if (!shortUrl) return res.status(404).json({ error: 'Not found' });

  shortUrl.url = url;
  shortUrl.updatedAt = new Date();
  await shortUrl.save();

  res.json(shortUrl);
};

// Delete
exports.deleteShortUrl = async (req, res) => {
  const { shortCode } = req.params;
  const deleted = await ShortUrl.findOneAndDelete({ shortCode });

  if (!deleted) return res.status(404).json({ error: 'Not found' });

  res.status(204).send();
};

// Get stats
exports.getUrlStats = async (req, res) => {
  const { shortCode } = req.params;
  const shortUrl = await ShortUrl.findOne({ shortCode });

  if (!shortUrl) return res.status(404).json({ error: 'Not found' });

  res.json({
    id: shortUrl._id,
    url: shortUrl.url,
    shortCode: shortUrl.shortCode,
    createdAt: shortUrl.createdAt,
    updatedAt: shortUrl.updatedAt,
    accessCount: shortUrl.accessCount
  });
};
