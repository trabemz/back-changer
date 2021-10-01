const { rm } = require('fs/promises');
const { imgFolder } = require('../config');
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
    await rm(this.path());
  }

  path() {
    return path.resolve(imgFolder, this.id + this.extension);
  }

  toPublicJSON() {
    return {
      id: this.id,
      uploadedAt: this.uploadedAt,
      size: this.size,
    };
  }

  toJSON() {
    return {
      id: this.id,
      uploadedAt: this.uploadedAt,
      size: this.size,
      extension: this.extension,
    };
  }
};
