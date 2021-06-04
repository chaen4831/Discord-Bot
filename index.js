const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	
	client.commands.set(command.name, command);
}

// Retrieves the prefix and token provided in the config file (must be named 'config.json' and in the same folder)
const { prefix, token } = require('./config.json');

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
  // Checks if prefix is included and if sent from bot
  if (message.author.bot) return;
	if (!message.content.startsWith(prefix) || message.author == message.author.bot.user) {
    console.log("message from a bot, or did not include !, returning");
    return;
  }

  // Trims the command to exclude the prefix and switches to lowercase
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

  // Checks if command is a command listed
  if (!client.commands.has(command)) {
    console.log("Could not find " + command);  
    return;
  }

  // Try and catch statement to check if command is valid
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
