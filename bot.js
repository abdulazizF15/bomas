const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setGame(` FUCK Off # `,'https://www.twitch.tv/IDK')

});
client.login(process.env.bomas);
