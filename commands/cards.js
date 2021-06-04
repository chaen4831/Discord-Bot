module.exports = {
  name: 'drawcard',
  description: 'Draws a standard card',
  execute(message, args) {
    message.channel.send(randomizer());
  },
};

// Values for the cards
var val = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

// Suits for the cards
var suit = [" of Clubs", " of Diamonds", " of Hearts", " of Spades"];

// Deck cards will be added to
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

// Draws a random card from the deck
function randomizer() {
  buildDeck();
  var index = Math.floor(Math.random() * deck.length);  

  return "Your card is **" + deck[index] + "**";
}
