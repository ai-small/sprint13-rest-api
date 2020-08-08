const express = require('express');
const path = require('path');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const notFound = require('./routes/notFound');

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', usersRouter);
app.use('/cards', cardsRouter);
app.use(notFound);

app.listen(PORT, () => {

});
