const { Client: Bot } = require('discord.js');
const bot = new Bot(
  {
    intents: 32767
  }
);

const { BanAdd, BanRemove, GuildJoin, GuildLeave, MessageDelete, MessageCreate } = require('../functions/index.js');

module.exports = { bot };

const EventEmitter = require('events');

class Client extends EventEmitter {

  /**
  *
  *
  */

  constructor(token){

    super();

    this.bot = bot;
    this.token = token;

    if(typeof this.token !== 'string') throw new TypeError('The client token must be a valid string.');
    
  }

  async login() {

    this.bot.login(this.token)
      .then(async () => {
        this.emit('connexion', this.bot);
      })
      .catch(async (e) => {
        throw new Error('An invalid token was provided.');
      });
    
  }
  
}

module.exports = {
  Client: Client
};