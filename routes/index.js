var express = require('express');
var router = express.Router();
var { MongoClient } = require('mongodb');
// const appInsights = require('applicationinsights');

/* GET home page. */
router.get('/', function (req, res, next) {
  const title = process.env.TITLE;
  const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
  // res.render('index', { title });

  const dbName = 'Library';
  (async function mongo() {
    let client;
    try {
      client = await MongoClient.connect(MONGO_CONNECTION_STRING);
      const db = client.db(dbName);
      const response = await db.collection('books').find().toArray();
      // appInsights.defaultClient.trackEvent({ name: 'mongoRequest', properties: { dbName, size: response.length } });
      res.render('index', { title, books: response });
    } catch (err) {
      console.log(err);
    }
  }());
});

module.exports = router;
