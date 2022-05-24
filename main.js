const board = document.querySelector(".board");

for (let row = 0; row < 8; row++) {
  let boxColor;
  for (let column = 0; column < 8; column++) {
    boxColor = (column + row) % 2 == 0 ? "white" : "black";
    const box = document.createElement("div");
    box.style.width = board.clientWidth / 8 + "px";
    box.style.height = board.clientHeight / 8 + "px";
    box.style.backgroundColor = boxColor;
    box.id = column + row * 8;
    box.classList = "box";
    board.appendChild(box);
  }
}

const boxes = document.querySelectorAll(".box");
console.log(boxes);

for (let i = 0; i < boxes.length; i++) {
  boxes[i].setAttribute("onclick", `draw(${i})`);
}

function draw(selected) {
  if (boxes[selected].style.backgroundColor == "white") {
    // for (let i = 0; i < 8; i++) {
    //   if (i + row == 8 || i + column == 8) continue;
    //   boxes[(i + row , i + column)].style.backgroundColor = "yellow";
    // }

    // for (let i = 7; i < -1; i--) {
    //   if (i + row == 0 || i + column == 0) continue;
    //   boxes[(i + row, i + column)].style.backgroundColor = "yellow";
    // }

    for (let i = selected; i < 64; i = i + 9) {
      if(i % 8 == 0 || i % 7 == 0) break;
      boxes[i].style.backgroundColor = "yellow";
    }
    for (let i = selected; i < 64; i = i + 7) {
      if(i % 8 == 0 || i % 7 == 0) break;
      boxes[i].style.backgroundColor = "yellow";
    }
    for (let i = selected; i > -1; i = i - 9) {
      if(i % 8 == 0 || i % 7 == 0) break;
      boxes[i].style.backgroundColor = "yellow";
    }
    for (let i = selected; i > -1; i = i - 7) {
      if(i % 8 == 0 || i % 7 == 0) break;
      boxes[i].style.backgroundColor = "yellow";
    }
  }
}
