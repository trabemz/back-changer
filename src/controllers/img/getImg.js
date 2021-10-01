const db = require('../../entities/Database');

module.exports = (req, res) => {
  const img = db.getOne(req.params.id);

  res.download(img.path());
};
