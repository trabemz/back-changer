const db = require('../../entities/Database');
const { BadRequestApiError } = require('../../validators/errors/ApiError');

module.exports = async (req, res, next) => {
  try {
    if (!req.params.id) {
      throw new BadRequestApiError('Image id should be provided.');
    }

    const imgId = req.params.id;

    const id = await db.remove(imgId);

    return res.json({ id });
  } catch (err) {
    next(err);
  }
};
