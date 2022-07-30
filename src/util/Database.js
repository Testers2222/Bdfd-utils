const db = require('quick.db');
const EventEmitter = require('events');

class Database extends EventEmitter {

  constructor() {

    this.db = db;
    
  }

  /**
  *
  * @param {String} key
  * @param {Any} value
  */

  async set (key, value){

    this.db.set(key, value);
    
  }

  /**
  *
  * @param {String} key
  */

  async get(key) {

    this.db.get(key);
    
  }
  
}

module.exports = {
  Database: Database
};