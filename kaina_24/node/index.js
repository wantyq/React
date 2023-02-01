const express = require('express');
const axios = require('axios');
const xml2js = require('xml2js');
const app = express();
const parser = new xml2js.Parser();
const port = process.env.PORT || 8080;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/api/xml-data', (req, res) => {
  const url = 'https://devinera.com/wp-content/uploads/woo-product-feed-pro/xml/SQlxGOe9FEwXekgPiVviPDWrD7vcZjRA.xml';
  
  axios.get(url)
    .then(response => {
      parser.parseString(response.data, (err, result) => {
        if (err) {
          console.error(err);
          res.sendStatus(500);
        } else {
          res.json(result);
        }
      });
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500);
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
