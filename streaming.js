const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("Streaming by_EfeIldec")

client.user.setActivity(`Yayın Açıklaması`, {
type: "STREAMING",
url: "Yayın URLsi"})
    .then(presence => console.log(`Your Status has been set to  ${presence.game ? presence.game.none : 'none'}`))
    .catch(console.error);
});

client.login('TOKEN');