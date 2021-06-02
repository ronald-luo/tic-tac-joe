(function initalizeGame() {
  container = document.getElementById("game-container");

  for (let i = 0; i < 9; i++) {
    temp = "div" + i;
    temp = document.createElement("div");
    temp.classList.add("cell");
    temp.setAttribute('id', i);
    container.appendChild(temp);
  }
  eventListenerAdder()
})()

let count = 0
let gameBoard = [0,0,0,0,0,0,0,0,0]
function eventListenerAdder() {
    nodeList = document.querySelectorAll(".cell")
    nodeList.forEach((button) => {
        button.addEventListener('click', (e) => {
            id = e.target.id
            count += 1
            current_player = whichPlayer()
            gameBoardOperator(e.target.id, current_player)
            renderGame(e.target.id, current_player)
            winChecker()

            let x = document.querySelectorAll(".move")

    
            if (x.length >= 1) {
                let y = document.getElementById("current_move")
                let move
                current_player === "X" ? move = "O": move = "X"
                y.textContent = `${move} to move`
            } else {
                toMove(current_player)
            }
        })
    })
}

function toMove (current_player) {
    let container = document.getElementById("to-move")
    current_player === "X" ? mover = "O" : mover = "X"
    console.log(`${mover} to move`)
    let move = document.createElement("h3")
    move.setAttribute('id', "current_move")
    move.classList.add("move")
    move.textContent = `${mover} to move`
    container.appendChild(move)
}

let playerOne = 'X'
let playerTwo = 'O'
function whichPlayer () {
    if (count % 2 == 0) {
        return playerOne
    } else {
        return playerTwo
    }
}

function gameBoardOperator(id,currentPlayer) {
    switch (currentPlayer) {
    case playerOne:
        gameBoard[id] = currentPlayer
        break
    case playerTwo:
        gameBoard[id] = currentPlayer
        break
    }
}

function renderGame(id, current) {
    temp = document.getElementById(id)
    temp.classList.toggle('clicked')
    temp.textContent = current
}

function winChecker() {
    console.log(gameBoard)
    
    if (gameBoard[0] !== 0 && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) { //h1
        console.log('hi there0')
        winAlert(gameBoard[0])
    } else if (gameBoard[1] !== 0 && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) { //h2
        console.log('hi there1')
        winAlert(gameBoard[1])
    } else if (gameBoard[2] !== 0 && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) { //h3
        console.log('hi there3')
        winAlert(gameBoard[2])
    } else if (gameBoard[0] !== 0 && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) { //v1
        console.log('hi there4')
        winAlert(gameBoard[0])
    } else if (gameBoard[3] !== 0 && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) { //v2
        console.log('hi there5')
        winAlert(gameBoard[3])
    } else if (gameBoard[6] !== 0 && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) { //v3
        console.log('hi there6')
        winAlert(gameBoard[6])
    } else if (gameBoard[4] !== 0 && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) { //d1
        console.log('hi there7')
        winAlert(gameBoard[4])
    } else if (gameBoard[2] !== 0 && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) { //d2
        console.log('hi there8')
        winAlert(gameBoard[2])
    }
}

function winAlert(player) {
    alert(`${player} wins!`);
    location.reload();
}