const { rm } = require('fs/promises');
const { imagesFolder } = require('../config');
const { generateId } = require('../utils/generateId');
const path = require('path');

module.exports = class Img {
  constructor(id, uploadedAt, size, extension) {
    this.id = id || generateId();
    this.uploadedAt = uploadedAt || Date.now();
    this.size = size;
    this.extension = extension;
  }

  async delete() {
    const pathToImg = path.resolve(imagesFolder, this.id + this.extension);
    await rm(pathToImg);
  }

  toPublicJSON() {
    return {
      id: this.id,
      uploadedAt: this.uploadedAt,
      size: this.size,
    };
  }
};
