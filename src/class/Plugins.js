const express = require('express');
const app = express();
const bot = require('./Client.js');

const EventEmitter = require('events');

class Plugins extends EventEmitter {

  constructor(){

    super();

    this.bot = bot;
    this.app = app;
    
    
  }

  async init () {

    this.app.listen(8080, async () => {
      console.clear();
      this.emit('listening', this.app, this.bot);
    });

    this.app.get('/client/ping', async (req, res) => {
      res.send({ping: this.bot.ws.ping + 'ms'});
    })
    
  }
  
}

module.exports = {
  Plugins: Plugins
};