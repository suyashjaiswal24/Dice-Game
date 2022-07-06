chance = 1;
target = 20
player1 = 0, player2 = 0;
gameOver;
function rollDice() {
    gameOver = 0;
    // document.getElementById("setTarget").innerHTML = "<b>"+target+"</b>"
    diceValue = Math.floor(Math.random() * 6) + 1;
    document.getElementById("discval").innerText = diceValue;
    if (chance === 1) {
        player1 += diceValue;
        document.getElementById("player1").innerHTML = "<b>" + player1 + "</b>"
        if (player1 >= target) {
            document.getElementById("btn").disabled = true;
            document.getElementById("message").innerHTML = "Player 1 Wins!!"
            gameOver = 1
            over();
        }
        chance = 2;
        document.getElementById("btn").innerText = "Player 2's Chance"
    }
    else {
        player2 += diceValue;
        document.getElementById("player2").innerHTML = "<b>" + player2 + "</b>"
        if (player2 >= target) {
            document.getElementById("btn").disabled = true;
            document.getElementById("message").innerHTML = "Player 2 Wins!!"
            gameOver = 1;
            over();
        }
        chance = 1;
        document.getElementById("btn").innerText = "Player 1's Chance"
    }
}

function over() {
    setTimeout(function () {
        chance = 1;
        player1 = player2 = 0;
        document.getElementById("discval").innerText = 0;
        document.getElementById("player1").innerText = 0;
        document.getElementById("player2").innerText = 0;
        document.getElementById("btn").disabled = false;
        document.getElementById("btn").innerText = "Player 1's Chance"
        document.getElementById("message").innerText = ""
    }, 1000)

}

