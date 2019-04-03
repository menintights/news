
const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const newsSchema = new mongoose.Schema({
  name: String,
  news: [{
    source: String,
    date: String,
    image: String,
    title: String,
    body: String,
    name: String,
    // views: { type: Number, default: 0 },
  }],
});

const News = mongoose.model('News', newsSchema);

module.exports = News;
