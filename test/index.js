const { Client } = require('../src/class/Client.js');
const client = new Client('OTk3NTg3MDAyODA1NDY5MjE1.GDpThE.GQGsIS3ABfvJZEspoy9bA78MSDxKiQ-0YyVlNk');
client.login();

client.on("connexion", async (bot) => {
  console.log('co as ' + bot.user.tag);
});

const { Plugins } = require('../src/class/Plugins.js');
const plugins = new Plugins();
plugins.init();

plugins.on("listening", (app, bot) => {
  console.log('apis are connected.');
});