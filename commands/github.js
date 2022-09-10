module.exports = {
  name: "github",
  async execute(channel, username, message, client) {
    client.say(
      channel,
      `Heres my github repo link @${username}: https://github.com/UFO-Studios/AlienBot-Twitch`
    );
  },
};
