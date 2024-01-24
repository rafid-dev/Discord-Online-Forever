const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
  bot.editStatus(process.env.status, {name: process.env.statusName, type: process.env.statusType})
});

bot.connect(); // Get the bot to connect to Discord
