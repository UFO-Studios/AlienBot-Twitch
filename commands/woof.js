module.exports = {
    name: "woof",
    async execute(channel, username, message, client) {
      client.say(channel, "woof woof");
    },
  };