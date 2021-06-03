module.exports = {
  name: 'playgofish',
  description: 'U got a 4?',
  execute(message, args) {
    message.channel.send(randomizer());
  },
};

var deck = [];
var tempDeck1 = ["Hearts", "Diamonds", "Spades", "Cloves"];

var tempDeck2 = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

for(var i = 0; i < tempDeck1.length; i++) {
  for(var j = 0; j < tempDeck2.length; j++) {
    deck.push(tempDeck1[i] + " of " + tempDeck2[j]);
  }
}

var userCards = [];
var botCards = [];

function randomizer() {
  var val = tempDeck2[Math.floor(Math.random() * 13)];
  var suit = tempDeck1[Math.floor(Math.random() * 4)];
  
  /*var yourCardIdx = Math.floor(Math.random() * 51);
  var yourCard = deck[yourCardIdx]*/
  //deck.remove(yourCardIdx);  
  

  return "Your card is " + val + " of " + suit;
}
