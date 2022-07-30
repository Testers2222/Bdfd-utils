const { bot } = require('../../class/Client.js');
const { Database } = require('../../util/Database.js');

class GuildJoin extends Database {

  constructor() {

    this.bot = bot;
    
  }
  
}

module.exports = { GuildJoin };