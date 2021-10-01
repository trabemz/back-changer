const multer = require('multer');
const config = require('../../config');
const path = require('path');
const { generateId } = require('../../utils/generateId');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, config.imgFolder);
  },
  filename: function (req, file, cb) {
    cb(null, generateId() + path.extname(file.originalname));
  },
});

module.exports = multer({ storage: storage }).single('image');
