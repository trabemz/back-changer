const { existsSync } = require('fs');
const { EventEmitter } = require('stream');
const { dumpFile } = require('../config');
const { writeFile } = require('fs/promises');
const Img = require('./Img');

class Database extends EventEmitter {
  constructor() {
    super();

    this.images = {};
  }

  async initFromDump() {
    if (existsSync(dumpFile) === false) return;

    const dump = require(dumpFile);

    if (typeof dump.images === 'object') {
      this.images = {};

      for (let id in dump.images) {
        const img = dump.images[id];
        this.images[id] = new Img(id, img.uploadedAt, img.size, img.extension);
      }
    }
  }

  insert(image) {
    this.images[image.id] = image;
    this.emit('changed');
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

    this.emit('changed');

    return id;
  }

  toJSON() {
    return {
      images: this.images,
    };
  }
}

const db = new Database();

db.initFromDump();

db.on('changed', () => {
  writeFile(dumpFile, JSON.stringify(db.toJSON(), null, '\t'));
});

module.exports = db;
