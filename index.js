module.exports = {
  Client: require('./src/class/Client.js').Client,
  Plugins: require('./src/class/Plugins.js'),
  Host: require('./src/class/Host.js')
};

require('./test/index.js');