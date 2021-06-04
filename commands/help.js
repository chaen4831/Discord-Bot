module.exports = {
	name: 'help',
	description: 'Tells you all of the commands',
	execute(message, args) {
		message.channel.send('**!beep** makes the bot respnd with boop.\n\n**!ping** makes the bot respond with pong\n\n**!drawcard** pulls a random card from a standard deck\n\n**!drawtarotcard** pulls a random card from a tarot deck');
	},
};