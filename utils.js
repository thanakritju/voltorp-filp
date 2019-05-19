function initBoard(n, scale) {
    // Create n x n Cards and n + n Info Cards.
    /* For example, 4 x 4 play cards (p) using a 2-dimentional array.
    and 4 + 4 info cards using 2 1-dimentional arrays.
     _______________________
    |                       |
    |   p   p   p   p   i  1|
    |   p   p   p   p   i  2|
    |   p   p   p   p   i  3|
    |   p   p   p   p   i  4|
    |   i   i   i   i       |
    |___1___2___3___4_______|
    
    */
    var playcards = new Array(n)
    var hInfocards = new Array(n)
    var vInfocards = new Array(n)
    // Distance from the edge card to edge board.
    const borderX = 50 * scale
    const borderY = 70 * scale
    // Distance between each card's positions.
    const paddingX = 50 * scale
    const paddingY = 75 * scale
    // Initialize play cards.
    for (i=0;i<n;i++) {
        playcards[i] = new Array(n)
        for (j=0;j<n;j++) {
            playcards[i][j] = new PlayCard(
                borderX + i * paddingX,
                borderY + j * paddingY,
                scale,
            )
        }
    }
    // Initialize horizontal info cards.
    for (i=0;i<n;i++){
        hInfocards[i] = new InfoCard(
            borderX + i * paddingX,
            // use 'n' as a paddingY
            borderY + n * paddingY,
            scale,
        )
        for (j=0;j<n;j++){
            // Vertical summation
            score = playcards[i][j].value
            if (score == 0 ){
                hInfocards[i].zeros += 1
            } else {
                hInfocards[i].totalScore += score
            }
        }
    }
    // Initialize vertical info cards.
    for (i=0;i<n;i++){
        vInfocards[i] = new InfoCard(
            // use 'n' as a paddingX
            borderX + n * paddingX,
            borderY + i * paddingY,
            scale,
        )
        for (j=0;j<n;j++){
            // horizontal summation
            score = playcards[j][i].value
            if (score == 0 ){
                vInfocards[i].zeros += 1 
            } else {
                vInfocards[i].totalScore += score
            }
        }
    }
    // Board must be some kind of responsive.
    // from p5 canvas create a canvas (n + 1 for an additional infoCard).
    const boardWidth = (2 * borderX + 50 * (n + 1) ) * scale
    const boardHeight = (2 * borderY + 75 * (n + 1) ) * scale
    
    return {playcards,hInfocards,vInfocards, boardWidth, boardHeight}
}
