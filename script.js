let score = 0;


const boxes = document.querySelectorAll(".box");
const scoreText = document.querySelector(".score");
const playBtn = document.querySelector(".play-btn");

playBtn.addEventListener("click", playGame);

function playGame() {

    let n1 = Math.floor(Math.random() * 10);
    let n2 = Math.floor(Math.random() * 10);
    let n3 = Math.floor(Math.random() * 10);

    boxes[0].textContent = n1;
    boxes[1].textContent = n2;
    boxes[2].textContent = n3;

    
    if (n1 === n2 && n2 === n3) {
        score += 10;
        alert("🎉 All three numbers matched! +10 points");
    } 
    else if (n1 === n2 || n2 === n3 || n1 === n3) {
        score += 5;
        alert("✨ Two numbers matched! +5 points");
    } 
    else {
        alert("❌ No match. Try again!");
    }

   
    scoreText.textContent = "Score: " + score;

  
    if (score >= 30) {
        alert("🏆 Congratulations! You won the game!");
        resetGame();
    }
}

function resetGame() {
    score = 0;
    scoreText.textContent = "Score: 0";
    boxes.forEach(box => box.textContent = "");
}
