module.exports = {
	name: 'help',
	description: 'Tells you all of the commands',
	execute(message, args) {
		message.channel.send('!beep makes the bot respnd with boop.\n!ping makes the bot respond with pong');
	},
};