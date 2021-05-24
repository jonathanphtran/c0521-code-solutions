console.log('Lodash is loaded:', typeof _ !== 'undefined');

/*

********************************** PSEUDOCODE **********************************

- create 4 objects
- each object will have 2 properties: name and hand
  - name will be a string and hand will be an empty array
- create an empty array
- create a counter variable of 0
- create a variable for total number of cards
- create an array holding sutis
- create an array to hold the cards
- create variable round2 and set it to false
- using a loop fill it with 52 objects
  - each object will have a rank and suit
  - create another loop going up to 13
  - assign the suit depending on what the counter is
  - assign the rank ace up to king
- at the end of the first loop, increase the counter and
- create a random number generator function that goes up to 52
- create a used card array
- create a loop that goes up to double the length of the players
  - first half will deal first card to each player
  - second half will deal second card to each player
  - once you get pass the first half, round2 variable will be true and
    - k will be set back to 0
  - if round2 is true and k is greater than the half way mark, break
  - get a random number
  - grab a card from the card array based on the index and random number
  - assign it to the hands array in the players object
  - push the given card to the used card array
  - remove the given card from the deck
- once the loop finishes, push the removed cards back into the deck
  - create a score variable and assign it to be 0
  - create a max variable and assign it to 0
  - loop through the number of players
  - loop through each card
   - if the card is a face card, increase the score by 10
   - if the card is an ace, increase score by 11
   - if score is a number card, increase score by the number
  - assign the score to the player
  - if the score is higher than the current, change the max to be the score
  - check which player does the max score match with
  - give back the player(s) name(s)

********************************************************************************

*/

var players = [
  { name: 'Jon', hand: [], score: 0 },
  { name: 'Jane', hand: [], score: 0 },
  { name: 'Jacob', hand: [], score: 0 },
  { name: 'Jenny', hand: [], score: 0 }
];
var cardDeck = [];
var card = [];
var suits = ['club', 'clover', 'diamond', 'heart'];
var cards = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
var total = 52;
var highScore = 0;
var round2 = false;

for (var i = 0; i < suits.length; i++) {
  for (var j = 0; j < cards.length; j++) {
    card.push(suits[i]);
    card.push(cards[j]);
    cardDeck.push(card);
    card = [];
  }
}

for (var k = 0; k < players.length * 2; k++) {
  if (k > players.length - 1 && round2 === true) break;
  if (k > players.length - 1) {
    k = 0;
    round2 = true;
  }
  var randomNum = Math.floor(Math.random() * total);
  players[k].hand.push(cardDeck[randomNum]);
  cardDeck.splice(randomNum, 1);
  total--;
}

for (var t = 0; t < players.length; t++) {
  for (var a = 0; a < players[t].hand.length; a++) {
    if (players[t].hand[a][1] === 'Ace') {
      players[t].score += 11;
    } else if (typeof (players[t].hand[a][1]) === 'string') {
      players[t].score += 10;
    } else {
      players[t].score += players[t].hand[a][1];
    }
  }
}

for (var y = 0; y < players.length; y++) {
  if (players[y].score > highScore) {
    highScore = players[y].score;
  }
}

for (var r = 0; r < players.length; r++) {
  if (players[r].score === highScore) {
    console.log(`The winner is ${players[r].name}!`);
  }
}
