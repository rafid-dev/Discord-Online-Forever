const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.on("messageCreate", (msg) => {
  bot.editStatus(process.env.status, {
    name: process.env.activity,
    type: parseInt(process.env.activityType),
  }); // just update the status on every message because it dont work with onready
});

bot.connect(); // Get the bot to connect to Discord