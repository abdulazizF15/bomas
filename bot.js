const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setGame(` 5t5Th Fm. `,'https://www.twitch.tv/IDK')

});
client.login(process.env.bomas);
