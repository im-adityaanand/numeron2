// Iteration 5: Store the player score and display it on the game over screen
document.querySelector("#score-box").innerHTML = localStorage.score;

document.querySelector("#play-again-button").addEventListener("click", function(){
    window.location.href = "game.html";
})
