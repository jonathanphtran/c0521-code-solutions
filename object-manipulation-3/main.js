console.log('Lodash is loaded:', typeof _ !== 'undefined');

/*

********************************** PSEUDOCODE **********************************

- create 4 objects
- each object will have 2 properties: name and hand
  - name will be a string and hand will be an empty array
- create an empty array
- create a counter variable of 0
- create an array holding the face cards
- using a loop fill it with 52 objects
  - each object will have a rank and suit
  - create another loop going up to 13
  - assign the suit depending on what the counter is
  - assign the rank ace up to king
- at the end of the first loop, increase the counter and
- create a random number generator function that goes up to 52
- create a used card array
- create a loop that goes up to 4 to represent the players
- create a loop that goes up to 2 to represent the cards
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
  - give back the player name

********************************************************************************

*/

// var player1 = { name: 'Jon', hand: [] };
// var player2 = { name: 'Jane', hand: [] };
// var player3 = { name: 'Jacob', hand: [] };
// var player4 = { name: 'Jenny', hand: [] };
// var cardDeck = [];
// var card = [];
// var suits = ['club', 'clover', 'diamond', 'heart'];
// var cards = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

// for (var i = 0; i < suits.length; i++) {
//   for (var j = 0; j < cards.length; j++) {
//     card.push(suits[i]);
//     console.log(i, suits[i]);

//     card.push(cards[j]);
//     console.log(j, cards[j]);

//     console.log('card', card);

//     cardDeck.push(card);
//     console.log(' ');

//     card = [];
//   }
// }

// console.log(cardDeck);
