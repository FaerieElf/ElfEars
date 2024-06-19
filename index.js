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
    .setType('PLAYING')
    .setURL('https://twitch.tv/developer') //Must be a youtube video link 
    .setState('ᥩིྀ ᥩིྀ  ◞ ）𓂂   ֯  ⑅╭◜◝ ͡ ◜◝╮‎') 
    .setName('⊂＿＿ u  z ᶻ╰◟◞ ͜ ◟◞╯‎‎')
    .setDetails(`ଘ/⠀ ⠀| っ꒰ིྀ ℬᵒᵘⁿᵈ 𝒯ᵒᵍᵉᵗʰᵉʳ꒱ིྀ‎`)
   
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/744819281342103574/1197624569641574541/Untitled269_20240118142716.png?ex=65bbf1cc&is=65a97ccc&hm=7af6c45a92e63c35cca76720a8e5d20446818bd1b688e403c40839457476d2d0&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('   ִ   ಿ  ₊   ֯   ഒ  ۪  ೀ ') //Text when you hover the Large image
    //Text when you hover the Small image
   
    .addButton('₍𐙚ྀᐢ..ᐢ₎', 'https://adorablefaerie.carrd.co/');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

 
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
