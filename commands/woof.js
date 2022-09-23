module.exports = {
    name: "woof",
    async execute(channel, username, message, client) {
      client.say(channel, "WOOF. WOOF WOOF WOOF. WOOFWOOFWOOFBARK");
    },
  };
