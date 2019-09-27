var suits = ["♥", "♠", "♦", "♣"]
var array = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10,"J", "Q","K"];
var deck = [];
for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 13; j++) {

        deck.push(array[j] + suits[i]);
    }
}

function shuffle(cards) {
    for (var i = cards.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i));
        var temp = cards[i];
        cards[i] = cards[rand];
        cards[rand] = temp;
    }
}

function PlayerOne() {
    document.getElementById("output1").innerHTML = deck[0] + ' ' + deck[2];
}
function PlayerTwo() {
    document.getElementById("output2").innerHTML = deck[0] + ' ' + deck[2];
}