const db = require('../../entities/Database');
const { existsSync } = require('fs');
const {
  NotFoundApiError,
  BadRequestApiError,
} = require('../../validators/errors/ApiError');

module.exports = (req, res, next) => {
  try {
    if (!req.params.id) {
      throw new BadRequestApiError('Image id should be provided.');
    }

    const img = db.getOne(req.params.id);

    if (existsSync(img.path()) === false) {
      throw new NotFoundApiError('Image content not found.');
    }
    res.setHeader('Content-Type', img.mimetype);
    res.download(img.path());
  } catch (err) {
    next(err);
  }
};
