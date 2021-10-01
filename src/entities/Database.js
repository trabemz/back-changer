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

  getOne(id) {
    const img = this.images[id];

    if (!img) return null;

    return img;
  }

  async remove(id) {
    const img = this.images[id];

    await img.delete();

    delete this.images[id];

    return id;
  }
}

const db = new Database();

module.exports = db;
