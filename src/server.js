const express = require('express');
const multer = require('multer');

const app = express();

app.get('/', (req, res) => {
  res.send('Okey');
});

app.post(
  '/upload',
  multer({ dest: './db/images' }).single('image'),
  (req, res) => {
    res.send(req.file.filename);
  }
);

app.get('/list', (req, res) => {
  res.send('list');
});

app.get('/image/:id', (req, res) => {
  res.send(req.params.id);
});

app.delete('/image/:id', (req, res) => {
  res.send(req.params.id);
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server started: ${PORT}`);
});
