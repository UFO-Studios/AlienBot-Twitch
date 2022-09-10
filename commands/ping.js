module.exports = {
  name: "!ping",
  async execute(channel, username, message, client) {
    client.say(channel, "pong!");
  },
};
