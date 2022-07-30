module.exports = {
  path: '/client/ping',
  method: 'get',
  async execute(bot, req, res) {
    res.send({ping: bot.ws.ping + 'ms'});
  }
}