const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});


let possibleGreetings = [
  "Hey there, sunshine!",
  "Hi, you amazing soul!",
  "Hello, beautiful being!",
  "Greetings, lovely friend!",
  "Good day, fantastic person!",
  "Hiya, wonderful one!",
  "Hey, brilliant spirit!",
  "Salutations, awesome individual!",
  "Hello, radiant friend!",
  "Hi, splendid soul!",
  "Hey there, incredible!",
  "Good morning, marvelous!",
  "Hello, delightful being!",
  "Hi there, joyous spirit!",
  "Hey, positivity!",
  "Greetings, magnificent person!",
  "Hello, outstanding soul!",
  "Hi, shining star!",
  "Hey, you wonderful being!",
  "Good day, fantastic friend!",
  "Hiya, joyful one!",
  "Hey, splendid spirit!",
  "Hello, sunshine!",
  "Hi, marvelous friend!",
  "Hey there, amazing!",
  "Good morning, extraordinary!",
  "Hello, delightful spirit!",
  "Hi there, happiness!",
  "Hey, radiant soul!",
  "Salutations, awesome friend!",
  "Hello, lovely one!",
  "Hi, fantastic individual!",
  "Hey, incredible being!",
  "Good day, marvelous friend!",
  "Hiya, wonderful soul!",
  "Hey, you brilliant person!",
  "Hello, outstanding spirit!",
  "Hi, shining soul!",
  "Hey there, fantastic!",
  "Good morning, extraordinary being!",
  "Hello, delightful friend!",
  "Hi there, joyous being!",
  "Hey, splendid individual!",
  "Greetings, amazing spirit!",
  "Hello, fantastic one!",
  "Hi, wonderful friend!",
  "Hey, brilliant soul!",
  "Good day, marvelous being!",
  "Hiya, radiant friend!",
  "Hey, incredible spirit!",
  "Hello, delightful one!",
  "Hi there, joyful friend!",
  "Hey, splendid soul!",
  "Hello, sunshine!",
  "Hi, marvelous being!",
  "Hey there, amazing spirit!",
  "Good morning, extraordinary friend!",
  "Hello, lovely soul!",
  "Hi, fantastic spirit!",
  "Hey, incredible being!",
  "Hello, delightful individual!",
  "Hiya, happiness!",
  "Hey, radiant friend!",
  "Greetings, awesome soul!",
  "Hello, magnificent being!",
  "Hi, outstanding spirit!",
  "Hey, you shining star!",
  "Good day, wonderful friend!",
  "Hiya, joyful soul!",
  "Hey, splendid being!",
  "Hello, marvelous spirit!",
  "Hi, fantastic friend!",
  "Hey there, amazing one!",
  "Good morning, extraordinary soul!",
  "Hello, delightful friend!",
  "Hi there, joyous spirit!",
  "Hey, splendid soul!",
  "Hello, sunshine!",
  "Hi, marvelous being!",
  "Hey there, amazing spirit!",
  "Good morning, extraordinary friend!",
  "Hello, lovely soul!",
  "Hi, fantastic spirit!",
  "Hey, incredible being!",
  "Hello, delightful individual!",
  "Hiya, happiness!",
  "Hey, radiant friend!",
  "Greetings, awesome soul!",
  "Hello, magnificent being!",
  "Hi, outstanding spirit!",
  "Hey, you shining star!",
  "Good day, wonderful friend!",
  "Hiya, joyful soul!",
  "Hey, splendid being!",
  "Hello, marvelous spirit!",
  "Hi, fantastic friend!",
  "Hey there, amazing one!",
  "Good morning, extraordinary soul!",
  "Hello, delightful friend!",
  "Hi there, joyous spirit!",
  "Hey, splendid soul!",
  "Hello, sunshine!"
];

// Define a regular expression for common greetings
let greetingRegex = /(hi|hello|hey|greetings|howdy|hi there|yo|good morning|good afternoon|good evening|hiya|hey there|hey hi|what's up|sup|hiya|aloha|bonjour|salut|ciao|hola|hallo|namaste|privet|konnichiwa|nihao|ohayou|konbanwa|jambo|sawubona|shalom|szia|merhaba|salam|marhaba|guten tag|g'day|oi|hej|labas|sveiki|ahoj|zdravo|nuqneH|selamat|kia ora|selamat pagi|selamat siang|selamat sore|selamat malam|assalamu alaykum|satsriakal|salam|ki obosta|kemon acho|hru)\b/i;

bot.on("messageCreate", (msg) => {
  if (msg.author.id !== bot.user.id){
    let content = msg.content.toLowerCase();


    // Check if the message contains a greeting
    if (greetingRegex.test(content)) {
      // Respond with a generic greeting response
      let randomIndex = Math.floor(Math.random() * possibleGreetings.length);
      let randomGreeting = possibleGreetings[randomIndex];
      bot.createMessage(msg.channel.id, randomGreeting.toLowerCase());
    }
  }
  bot.editStatus(process.env.status, {
    name: process.env.activity,
    type: parseInt(process.env.activityType),
  });
});

bot.connect(); // Get the bot to connect to Discord

