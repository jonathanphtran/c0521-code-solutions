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

********************************************************************************

*/
