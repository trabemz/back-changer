const { EventEmitter } = require('stream');

class Database extends EventEmitter {
  constructor() {
    super();

    this.images = {};
  }

  insert(image) {
    this.images[image.id] = image;
  }

  get() {
    return Object.values(this.images);
  }
}

const db = new Database();

module.exports = db;
