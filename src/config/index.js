const path = require('path');

const dbFolder = path.resolve(__dirname, '../../db/');
const imgFolder = path.resolve(dbFolder, 'images');
const dumpFile = path.resolve(dbFolder, 'dump.json');

module.exports = {
  PORT: 8080,

  dbFolder,
  imgFolder,
  dumpFile,
};
