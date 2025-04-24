const Url = require('../models/url');
const shortid = require('shortid');

exports.shortenUrl = async (req, res) => {
  const { originalUrl } = req.body;
  const shortCode = shortid.generate();

  try {
    const newUrl = await Url.create({ shortCode, originalUrl });
    res.json({ shortUrl: `${process.env.BASE_URL}/${shortCode}` });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.redirectUrl = async (req, res) => {
  const { code } = req.params;
  const redisClient = req.app.get('redisClient');

  try {
    const cached = await redisClient.get(code);
    if (cached) return res.redirect(cached);

    const url = await Url.findOne({ shortCode: code });
    if (url) {
      url.clicks.push({ ip: req.ip });
      await url.save();
      await redisClient.set(code, url.originalUrl);
      return res.redirect(url.originalUrl);
    } else {
      return res.status(404).json({ error: 'URL not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};