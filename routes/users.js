const usersRouter = require('express').Router();
const path = require('path');
const fs = require('fs');

usersRouter.get('/', (req, res) => {
  const usersPath = path.join(__dirname, '../data', 'users.json');
  const reader = fs.createReadStream(usersPath, { encoding: 'utf-8' });

  reader.on('open', () => {
    res.writeHead(200, { 'Content-type': 'application/json; charset=utf-8' });
    reader.pipe(res);
  });

  reader.on('error', (err) => {
    res.status('500').send({ Error: err.message });
  });
});

usersRouter.get('/:id', (req, res) => {
  const usersPath = path.join(__dirname, '../data', 'users.json');
  const reader = fs.createReadStream(usersPath, { encoding: 'utf-8' });

  const { id } = req.params;
  let userList = '';

  reader.on('data', (data) => {
    userList += data;
  });

  reader.on('end', () => {
    res.set({ 'Content-type': 'application/json; charset=utf-8' });

    const users = JSON.parse(userList);

    const user = users.find((item) => item._id === id);

    if (user) {
      res.status('200').send(user);
    } else res.status('404').send({ message: 'Нет пользователя с таким id' });
  });

  reader.on('error', (err) => {
    res.status('500').send({ Error: err.message });
  });
});

module.exports = usersRouter;
