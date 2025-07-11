const mongoose = require('mongoose');

const shortUrlSchema = new mongoose.Schema({
  url: String,
  shortCode: { type: String, unique: true },
  createdAt: Date,
  updatedAt: Date,
  accessCount: { type: Number, default: 0 }
});

module.exports = mongoose.model('ShortUrl', shortUrlSchema);
