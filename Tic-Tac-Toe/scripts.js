function gameBoard() {
  const board = [];
  for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push(" ");
    }
    board.push(row);
  }
  return board;
}

function player() {
  let name = prompt("NAME:");
  while (name === null || name.trim() === "") {
    name = prompt("NAME cannot be empty:");
  }

  return { name };
}

function gameFlow() {
  const board = gameBoard();
  let player1 = player();
  let player2 = player();
  let winner = { isFound: false, person: "" };
  let player1Turn = true;
  document.getElementById("reset").addEventListener("click", () => {
    document.getElementById("boardContainer").innerHTML = "";
    gameFlow();
  });

  function userInput(a, b, c) {
    if (board[a][b] === " ") {
      board[a][b] = c;
      player1Turn = !player1Turn;
    } else if (board[a][b] !== " ") {
      console.log("error 1");
    }
  }

  function checkWinner() {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] !== " ") {
        winner.isFound = true;
        winner.person = board[i][0];
      }
      if (board[0][i] === board[1][i] && board[0][i] == board[2][i] && board[0][i] !== " ") {
        winner.isFound = true;
        winner.person = board[0][i];
      }
    }

    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== " ") {
      winner.isFound = true;
      winner.person = board[0][0];
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[2][0] !== " ") {
      winner.isFound = true;
      winner.person = board[0][2];
    }
    if (winner.isFound) {
      if (winner.person == "⭕️") {
        alert(`Winner is ${player1.name}`);
      } else {
        alert(`WINNER is ${player2.name}`);
      }
    }
  }

  function drawBoard() {
    const div = document.getElementById("boardContainer");

    for (let i = 0; i < 3; i++) {
      let row = document.createElement("div");
      row.style.width = div.offsetWidth + "px";
      row.style.height = div.offsetHeight + "px";
      row.style.boxSizing = "border-box";
      row.style.display = "flex";
      row.style.display = "row";
      div.appendChild(row);

      for (let j = 0; j < 3; j++) {
        let sqr = document.createElement("div");
        sqr.style.height = row.offsetHeight;
        sqr.style.width = row.offsetWidth / 3 + "px";
        sqr.style.border = "1px solid black";
        sqr.style.boxSizing = "border-box";
        sqr.style.textAlign = "center";
        sqr.style.fontSize = "130px";

        sqr.addEventListener("click", () => {
          const rowIndex = Array.from(div.children).indexOf(row);
          const sqrIndex = Array.from(row.children).indexOf(sqr);

          userInput(rowIndex, sqrIndex, player1Turn ? "❌" : "⭕️");
          sqr.innerHTML = board[rowIndex][sqrIndex];
          checkWinner();
        });
        row.appendChild(sqr);
      }
    }
  }
  drawBoard();
}

gameFlow();
