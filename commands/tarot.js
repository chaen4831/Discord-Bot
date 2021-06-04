module.exports = {
	name: 'drawtarotcard',
	description: 'Returns a tarot card',
	execute(message, args) {
		message.channel.send(card());
	},
};

// First part of tarot deck
var majorArcana = ["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Heirophant", "The Lovers", "The Chariot", "Strength", "The Hermit", "The Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement", "The World"];

// Values for second part of tarot deck
var minorArcanaVals = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Page", "Knight", "Queen", "King"];

// Suits for second part of tarot deck
var minorArcanaSuits = [" of Wands", " of Cups", " of Swords", " of Pentacles"];

// Deck cards will be added to
var deck = [];

// Builds tarot deck and draws a random card
function card() {
  for(var i = 0; i < majorArcana.length; i++) {
    deck.push(majorArcana[i]);
  }

  for(var j = 0; j < minorArcanaSuits.length; j++) {
    for(var k = 0; k < minorArcanaVals.length; k++) {
      var val = minorArcanaVals[k];
      var suit = minorArcanaSuits[j];

      var minorArcanaCard = val.concat(suit);

      deck.push(minorArcanaCard);
    }
  }

  var index = Math.floor(Math.random() * deck.length);

  return "You have pulled: **" + deck[index] + "**";
}