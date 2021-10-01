const db = require('../../entities/Database');

module.exports = (req, res) => {
  res.json(db.get().map((img) => img.toPublicJSON()));
};
