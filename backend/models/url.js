const { timeStamp } = require('console');
const mongoose = require('mongoose');
const { type, networkInterfaces } = require('os');
const { stringify } = require('querystring');

const urlSchema = new mongoose.Schema({
    shortCode: { type: String, require: true, unique: true},
    originalUrl: { type: String, require: true},
    createAt: { type: Date, default: Date.now},
    clicks: [
        {
            timeStamp: { type: Date, default: Date.now},
            ip: String
        }
    ]
});

module.exports = mongoose.model('url', urlSchema)