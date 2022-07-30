const { bot } = require('../../class/Client.js');
const { Database } = require('../../util/Database.js');

class MessageDelete extends Database {

  constructor() {

    this.bot = bot;

    this.bot.on("messageDelete", async (message) => {

      this.set('snipe_' + message.id, {content: message.content, channel: message.channel.id, author: message.author, created: parseInt(message.createdTimestamp / 1000), deleted: parseInt(Date.now() / 1000)});
      
    });
    
  }
  
}

module.exports = { MessageDelete };