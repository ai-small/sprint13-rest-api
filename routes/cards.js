const cardsRouter = require('express').Router();
const path = require('path');
const fs = require('fs');

cardsRouter.get('/', (req, res) => {
  const cardsPath = path.join(__dirname, '../data', 'cards.json');
  const reader = fs.createReadStream(cardsPath, { encoding: 'utf-8' });

  reader.on('open', () => {
    res.writeHead(200, { 'Content-type': 'application/json; charset=utf-8' });
    reader.pipe(res);
  });

  reader.on('error', (err) => {
    res.status('500').send({ Error: err.message });
  });
});

module.exports = cardsRouter;
