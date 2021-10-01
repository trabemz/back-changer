const path = require('path');
const Img = require('../../entities/Img');
const db = require('../../entities/Database');

module.exports = (req, res) => {
  const parsedName = path.parse(req.file.filename);

  const id = parsedName.name;
  const extension = parsedName.ext;

  db.insert(new Img(id, Date.now(), req.file.size, extension));

  res.send(id);
};
