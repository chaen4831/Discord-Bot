const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	
	client.commands.set(command.name, command);
}

// Retrieves the prefix and token provided in the config file
const { prefix, token } = require('./config.json');

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
 
  if (message.author.bot) return;

	if (!message.content.startsWith(prefix) || message.author == message.author.bot.user) {
    console.log("message from a bot, or did not include !, returning");
    return;
  }

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) {
    console.log("Could not find " + command);  
    return;
  }

	try {
    console.log("Running " + command);
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
  }
});


// Logs in as the token given in the configuration file 
client.login(token);
