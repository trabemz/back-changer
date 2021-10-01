const express = require('express');
const multer = require('multer');
const config = require('./config');
const { generateId } = require('./utils/generateId');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.send('Okey');
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, config.imagesFolder);
  },
  filename: function (req, file, cb) {
    cb(null, generateId() + path.extname(file.originalname)); //Appending extension
  },
});

app.post(
  '/upload',
  multer({ storage: storage }).single('image'),
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

app.listen(config.PORT, () => {
  console.log(`Server started: ${config.PORT}`);
});
