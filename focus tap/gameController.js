let turnIndex = 0;
let scoreCount = 0;

const turnIndexElement = document.getElementById('turn-index');
turnIndexElement.innerText = turnIndex;

const scoreCountElement = document.getElementById('score-count');
scoreCountElement.innerText = scoreCount;

const decreaseNum = event => {
    const clickedBtn = event.srcElement;
    
    if (isGameOver(clickedBtn.id)) {
        gameOver();
    } else {
        clickedBtn.innerText = clickedBtn.innerText - 1;
        if(clickedBtn.innerText <=2){
            clickedBtn.innerText = Math.floor(Math.random() * 8 + 3) ;
        }
        turnIndex++;
        turnIndex %= 3;
        turnIndexElement.innerText = turnIndex;

        if (time)
        scoreCount++;
        scoreCountElement.innerText = scoreCount;
    }
}

const isGameOver = clickedbtnId => clickedbtnId !== `btn-${turnIndex}`;

const gameOver = () => {
    window.alert("Game Over!");
    turnIndex = 0;
    turnIndexElement.innerText = turnIndex;

    scoreCount = 0;
    scoreCountElement.innerText = scoreCount;
}