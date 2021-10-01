const { generateId } = require('../utils/generateId');

module.exports = class Img {
  constructor(id, uploadedAt, size, extension) {
    this.id = id || generateId();
    this.uploadedAt = uploadedAt || Date.now();
    this.size = size;
    this.extension = extension;
  }
  toPublicJSON() {
    return {
      id: this.id,
      uploadedAt: this.uploadedAt,
      size: this.size,
    };
  }
};
