const path = require('path');

const dbFolder = path.resolve(__dirname, '../../db/');
const imagesFolder = path.resolve(dbFolder, 'images');

module.exports = {
  PORT: 8080,

  dbFolder,
  imagesFolder,
};
