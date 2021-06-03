module.exports = {
  name: 'newgofish',
	description: 'go fish',
	execute(message, args) {
		message.channel.send(game());
	},
};

var val = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

var suit = [" of Clubs", " of Diamonds", " of Hearts", " of Spades"];

var deck = [];

// Adds cards to create a standard 52 card deck
function buildDeck() {
  for(var j = 0; j < suit.length; j++) {
    for(var k = 0; k < val.length; k++) {

      var card = val[k] + suit[j];

      deck.push(card);
    }
  }
}

// These are the cards in the user's and bot's hands--each inner array represents a value (e.g. 2, 10, King)
var userCards = [[], [], [], [], [], [], [], [], [], [], [], []];
var botCards = [[], [], [], [], [], [], [], [], [], [], [], []];

// Deals cards at beginning
function dealCards() {
  for(var i = 0; i < 7; i++) {
    // Adding cards to user deck
    var card = Math.floor(Math.random() * deck.length);
    userCards[0][0].push(card);
    deck.remove(deck.indexOf(card));

    // Adding cards to bot deck
    var card = Math.floor(Math.random() * deck.length);
    botCards[0][0].push(card);
    deck.remove(deck.indexOf(card));
  }
}

// The main function to return what is being said
function game() { 
  buildDeck();

  // Returns a random card to the user
  var index = Math.floor(Math.random() * deck.length);
  return "You have pulled: " + deck[index];
}
