const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1116973056640942171')
    .setType('STREAMING')
    .setURL('https://twitch.tv/developer') //Must be a youtube video link 
    .setState('𝄞𓈒  𓏼   ‿◟  Fuyo 𓂃◞') 
    .setName('Elves & Faeries Unite')
    .setDetails(`◞ ̩͙⏝ †∔ ྀི ◟   ♡`)
   
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/854208729041076224/1264862686899077206/Untitled192_20240722043232.png?ex=669f6aac&is=669e192c&hm=412f9f3f3105847050d77a6e39f5447bea8a5b80c5846d8c4629ce15ab6230c9&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('꣑ৎ  𐔌 𓏲   Soft n Sweet 𓎢') //Text when you hover the Large image
    //Text when you hover the Small image
   
    .addButton('꒰ིྀMy Carrd꒱','https://adorablefaerie.carrd.co/');
    .addButton('꒰ིྀMy Rentry꒱ིྀ','https://rentry.co/fuyomii');
  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

 
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
