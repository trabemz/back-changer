const db = require('../../entities/Database');

module.exports = async (req, res) => {
  const imgId = req.params.id;

  const id = await db.remove(imgId);

  return res.json({ id });
};
