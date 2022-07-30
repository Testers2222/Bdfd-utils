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
      this.emit('listening', this.app, this.bot);
    })
    
  }
  
}

module.exports = {
  Plugins: Plugins
};