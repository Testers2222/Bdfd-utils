const { bot } = require('../../class/Client.js');
const { Database } = require('../../util/Database.js');

class MessageCreate extends Database {

  constructor() {

    this.bot = bot;
    
  }
  
}

module.exports = { MessageCreate };