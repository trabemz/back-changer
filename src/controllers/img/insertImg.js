const path = require('path');
const Img = require('../../entities/Img');
const db = require('../../entities/Database');
const { BadRequestApiError } = require('../../validators/errors/ApiError');

module.exports = (req, res, next) => {
  try {
    if (!req.file) {
      throw new BadRequestApiError('Image not received');
    }

    const parsedName = path.parse(req.file.filename);

    const id = parsedName.name;
    const extension = parsedName.ext;

    db.insert(new Img(id, Date.now(), req.file.size, extension));

    res.json({ id });
  } catch (err) {
    return next(err);
  }
};
