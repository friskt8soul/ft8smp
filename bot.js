const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NjM5NjMzNjQ0OTE0MjEyODY0.XbuKjw.0OAkA0rw6bLWXJ9WIP7gbX2k-Tc');
