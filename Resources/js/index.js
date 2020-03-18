"use strict";

function handleDivHover(e) {
  this.style.backgroundColor = "black";
}

function handleResetclick(e) {
  let gridSize = null;
  do {
    gridSize = parseInt(prompt("How many squares per side for your new grid? (1-100)"));
  } while (!gridSize || gridSize < 1 || gridSize > 100) 

  document.querySelector("#container").innerHTML = "";
  generateGrid(gridSize);

}

function generateGrid(gridWidth) {
  const container = document.querySelector("#container");
  const cellSize = Math.floor(960/gridWidth);
  const containerWidth = cellSize*gridWidth;
  container.style.gridTemplateRows = `repeat(${gridWidth}, ${cellSize}px)`;
  container.style.gridTemplateColumns=  `repeat(${gridWidth}, ${cellSize}px)`;
  container.style.width = `${containerWidth}px`;

  for(let r = 1; r <= gridWidth; r++) {
    for(let c = 1; c <= gridWidth; c++) {
      const newGrid = document.createElement("div");
      newGrid.style.borderTop = "1px solid black";
      newGrid.style.borderLeft = "1px solid black";
      newGrid.style.gridArea = `${r} ${c} ${r+1} ${c+1}`
      newGrid.addEventListener('mouseenter', handleDivHover);
      //newGrid.textContent = `${r},${c}`;
      container.appendChild(newGrid);

    }
  }
}

generateGrid(16);
const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener('click', handleResetclick);

