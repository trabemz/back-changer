const express = require('express');
const multer = require('multer');
const config = require('./config');
const { generateId } = require('./utils/generateId');
const path = require('path');
const db = require('./entities/Database');
const Img = require('./entities/Img');

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
    const parsedName = path.parse(req.file.filename);

    const id = parsedName.name;
    const extension = parsedName.ext;

    db.insert(new Img(null, null, req.file.size, extension));

    res.send(id);
  }
);

app.get('/list', (req, res) => {
  res.json(db.get().map((img) => img.toPublicJSON()));
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
