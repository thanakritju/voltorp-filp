
const scale = 1.0
// number of cards in each column and row
const number = 5

let {playcards, hInfocards, vInfocards, boardWidth, boardHeight} = initBoard(number, scale)

function setup() {
    // Create a canvas from p5.js
    createCanvas(boardWidth, boardHeight)
}

function draw() {
    // fill background
    background(150)
    //Banner
    fill(0)
    textSize(30)
    textAlign(CENTER);
    text("Voltorp Flip",boardWidth/2,50)

    for (var card of hInfocards) {
        card.display()
    }
    for (var card of vInfocards) {
        card.display()
    }
    for (var cards of playcards) {
        for (var card of cards) {
            if (card.cursorOn() && mouseIsPressed ) {
                card.isClicked = true
            }
            card.display()
        }
    }
}
