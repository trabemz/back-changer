const multer = require('multer');
const config = require('../../config');
const path = require('path');
const { generateId } = require('../../utils/generateId');
const { BadRequestApiError } = require('../../validators/errors/ApiError');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, config.imgFolder);
  },
  filename: function (req, file, cb) {
    cb(null, generateId() + path.extname(file.originalname));
  },
});

module.exports = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new BadRequestApiError('Only image files are allowed'));
    }
    cb(null, true);
  },
}).single('image');
