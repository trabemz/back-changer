const db = require('../../entities/Database');
const { createReadStream } = require('fs');
const { replaceBackground } = require('backrem');
const { BadRequestApiError } = require('../../validators/errors/ApiError');

module.exports = async (req, res, next) => {
  try {
    if (!req.query.front || !req.query.back) {
      throw new BadRequestApiError(
        'Front and back images id should be provided.'
      );
    }
    const front = db.getOne(req.query.front);
    const back = db.getOne(req.query.back);

    const frontStream = createReadStream(front.path());
    const backSteam = createReadStream(back.path());
    const color = req.query.color ? req.query.color.split(',') : [0, 0, 0];
    const threshold = req.query.threshold ?? 0;

    const result = await replaceBackground(
      frontStream,
      backSteam,
      color,
      threshold
    );

    result.pipe(res);
  } catch (err) {
    next(err);
  }
};
