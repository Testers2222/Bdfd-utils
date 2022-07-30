const { bot } = require('../../class/Client.js');
const { Database } = require('../../util/Database.js');

class GuildLeave extends Database {

  constructor() {

    this.bot = bot;
    
  }
  
}

module.exports = { GuildLeave };