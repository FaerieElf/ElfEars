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
   
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/853213585244815400/1252906458778177536/IMG_7277.png?ex=66768e91&is=66753d11&hm=47b47f8cda2cfcb21e4c58fb6737a9d13a55a0d52a25a131522103846892beac&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('⊂＿＿ u  ⠀⠀   z ᶻ╰ ◟◞  ͜ ◟◞ ╯‎') //Text when you hover the Large image
    //Text when you hover the Small image
   
    .addButton('૮꒰ྀི ◞ ◟ ꒱ა', 'https://adorablefaerie.carrd.co/');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

 
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
