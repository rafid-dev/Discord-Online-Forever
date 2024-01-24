const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.on("ready", () => {
  /* status	String (optional)
    Sets the bot's status, either "online", "idle", "dnd", or "invisible"
    activities	Array | Object (optional)
    Sets the bot's activities. A single activity object is also accepted for backwards compatibility
    activities[].name	String
    The name of the activity
    activities[].type	Number
    The type of the activity. 0 is playing, 1 is streaming (Twitch only), 2 is listening, 3 is watching, 5 is competing in
    activities[].url	String (optional)
    The URL of the activity
  */
  bot.editStatus(process.env.status, {name: process.env.activity, type: process.env.activityType})
})

bot.connect(); // Get the bot to connect to Discord