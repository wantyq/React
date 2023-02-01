const express = require('express');
const axios = require('axios');
const xml2js = require('xml2js');
const app = express();
const parser = new xml2js.Parser();
const port = process.env.PORT || 8080;
const fs = require('fs');

let result = {};

const url = 'https://devinera.com/wp-content/uploads/woo-product-feed-pro/xml/SQlxGOe9FEwXekgPiVviPDWrD7vcZjRA.xml';

axios.get(url)
  .then(response => {
    parser.parseString(response.data, (err, res) => {
      if (err) {
        console.error(err);
      } else {
        result = res;
      }
    });
  })
  .catch(error => {
    console.error(error);
  });

  app.get('/api/xml-data', (req, res) => {
    res.json(result);
  });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
