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
    .setType('WATCHING')
    .setURL('https://twitch.tv/developer') //Must be a youtube video link 
    .setState('ଘ/⠀ ⠀| っ⠀  ⠀ ꒰ིྀℬᵒᵘⁿᵈ 𝒯ᵒᵍᵉᵗʰᵉʳ꒱ིྀ‎‎') 
    .setName('Where Fairies Frolick')
    .setDetails(`ᥩིྀ ᥩིྀ  ◞ ）𓂂  ֯ ╭◜◝ ͡ ◜◝╮`)
   
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/853213585244815400/1255894977309966376/Untitled121_20240625022057.png?ex=667ecad7&is=667d7957&hm=ef5606d53ec710337a6f34eca6039780fb6604f8a6113e73df4de0669965a29b&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('⊂＿＿ u  ⠀⠀   z ᶻ╰ ◟◞  ͜ ◟◞ ╯‎') //Text when you hover the Large image
    //Text when you hover the Small image
   
    .addButton('૮꒰ྀི ◞ ◟ ꒱ა', 'https://adorablefaerie.carrd.co/');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

 
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
