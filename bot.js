require("dotenv").config();
const TMI = require("tmi.js");
const fs = require("node:fs");
const path = require("node:path");

const client = new TMI.Client({
  options: { debug: true },
  identity: {
    username: process.env.USERNAME,
    password: process.env.OAUTH_TOKEN,
  },
  channels: ["Kingerious"],
});

client.connect().catch(console.error);

const greetings = ["hi", "hello", "hey", "heyo", "hiyo"];

const byes = ["bye", "cya", "goodbye", "see ya", "gtg"];

const commands = [];
const commandsPath = path.join(__dirname, "./commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((f) => f.endsWith(".js"));

for (const command of commandFiles) {
  const commandContent = require(path.join(commandsPath, command));

  commands.push({
    name: commandContent.name,
    execute: commandContent.execute,
  });
}

client.on("message", (channel, { username }, message, self) => {
  if (self) return;

  if (greetings.includes(message))
    return client.say(channel, `Hello there @${username}!`);

  if (byes.includes(message)) return client.say(channel, `Bye @${username}!`);

  commands.map((obj) => {
    if (obj.name == message) {
      obj.execute(channel, username, message, client);
    }
  });
});
