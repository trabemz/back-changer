const db = require('../../entities/Database');
const { createReadStream } = require('fs');
const { replaceBackground } = require('backrem');

module.exports = (req, res) => {
  const front = db.getOne(req.query.front);
  const back = db.getOne(req.query.back);

  const frontStream = createReadStream(front.path());
  const backSteam = createReadStream(back.path());
  const color = req.query.color.split(',');
  const threshold = req.query.threshold;

  replaceBackground(frontStream, backSteam, color, threshold).then(
    (readableStream) => {
      readableStream.pipe(res);
    }
  );
};
