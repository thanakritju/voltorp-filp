class Card {
    constructor(x,y,scale=1) {
        // Positions of a card in the board.
        this.x = x
        this.y = y
        // Width and Height of a card.
        this.width = 30 * scale
        this.height = 55 * scale
    }
}

class PlayCard extends Card {
    constructor(x,y,scale){
        super(x,y,scale)
        // Value of the card randomly distributed in the given array.
        this.value = [1,1,1,0,0,2,3][Math.floor(Math.random()*7)];
        // At start of the game, the card is flip down.
        this.isClicked = false
        // Text positions.
        this.textX = this.width / 2
        this.textValueY = this.height / 2
    }
    // Display using p5.js.
    display() {
        if (this.isClicked) {
            // Draw a rectangle.
            fill(255)
            rect(this.x,this.y,this.width,this.height)
            // Display Value
            fill(0)
            textAlign(CENTER)
            text(this.value, this.x + this.textX, this.y + this.textValueY)
        } else if (this.cursorOn()) {
            // Do another.
            fill(100)
            rect(this.x,this.y,this.width,this.height)
        } else {
            fill(125)
            rect(this.x,this.y,this.width,this.height)
        }
        
    }


    // Check if cursor is on the card.
    cursorOn() { 
        return (
            mouseX >= this.x &&
            mouseX <= this.x + this.width &&
            mouseY >= this.y &&
            mouseY <= this.y + this.height
        ) 
    }
}

class InfoCard extends Card {
    constructor(x,y,scale){
        super(x,y,scale)
        // They must be overide when intializing the board.
        this.zeros = 0
        this.totalScore = 0

        // Text positions.
        this.textX = this.width / 2 
        this.textZerosY = 50 * scale
        this.textScoresY = 20 * scale
    }
    display() {
        // Draw a rectangle.
        fill(220)   
        rect(this.x,this.y,this.width,this.height)
        //define text size.
        textSize(15)
        textAlign(CENTER);
        // How many zeros.
        fill(255,100,100)
		text(this.zeros, this.x + this.textX, this.y + this.textZerosY);
        // Total score in row or column.
        fill(0)
		text(this.totalScore, this.x + this.textX, this.y + this.textScoresY);
        
    }
}