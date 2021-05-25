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
        })
    })
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
    console.log(gameBoard)
}

function renderGame(id, current) {
    temp = document.getElementById(id)
    temp.classList.toggle('red')
    temp.textContent = current
}

function winChecker() {
    console.log(gameBoard)
    
    if (gameBoard[0] !== 0 && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) { //h1
        console.log('hi there0')
        alert(`${gameBoard[0]} wins`)
    } else if (gameBoard[1] !== 0 && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) { //h2
        console.log('hi there1')
        alert(`${gameBoard[1]} wins`)
    } else if (gameBoard[2] !== 0 && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) { //h3
        console.log('hi there3')
        alert(`${gameBoard[2]} wins`)
    } else if (gameBoard[0] !== 0 && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) { //v1
        console.log('hi there4')
        alert(`${gameBoard[0]} wins`)
    } else if (gameBoard[3] !== 0 && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) { //v2
        console.log('hi there5')
        alert(`${gameBoard[3]} wins`)
    } else if (gameBoard[6] !== 0 && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) { //v3
        console.log('hi there6')
        alert(`${gameBoard[6]} wins`)
    } else if (gameBoard[4] !== 0 && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) { //d1
        console.log('hi there7')
        alert(`${gameBoard[4]} wins`)
    } else if (gameBoard[2] !== 0 && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) { //d2
        console.log('hi there8')
        alert(`${gameBoard[2]} wins`)
    }
    
}