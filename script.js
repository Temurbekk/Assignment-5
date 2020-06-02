let columns = 0;
let colouring = false;
var selectedColor = "#FFFFFF";

function pickBlue() {
  selectedColor = "#00FFFF";
}

function pickRed() {
  selectedColor = "#FF6666";
}

function pickWhite() {
  selectedColor = "#FFFFFF";
}

const tableCells = document.getElementsByTagName("td");

const addRow = () => {
  if (columns === 0) column = 1;
  const table = document.getElementById("table");
  const row = document.createElement("tr");

  row.classList.add("row");
  table.appendChild(row);

  let index = 0;

  while (index < columns) {
    const pixel = document.createElement("td");
    pixel.classList.add("pixel");
    row.appendChild(pixel);
    index++;
  }

  for (let i = 0; i < tableCells.length; i++) {
    //Derrick's Code: This allows you to change the color of the cells
    //updated to call a general event handling function to allow for setting
    //colours via drag
    handleEvents(tableCells[i])
  }
  //Making sure the function is being called
  console.log("Adding cell");
};

const addColumn = () => {
  if (columns === 0) {
    column = 1;
    addRow();
  }
  columns++;
  const row = document.getElementsByClassName("row");
  const tableRow = Array.from(row);

  tableRow.forEach((cell) => {
    const pixel = document.createElement("td");
    pixel.classList.add("pixel");
    cell.appendChild(pixel);
  });

  for (let i = 0; i < tableCells.length; i++) {
    //Derrick's Code: This allows you to change the color of the cells
    //updated to call a general event handling function to allow for setting
    //colours via drag
    handleEvents(tableCells[i])
  }

  //Making sure the function is being called
  console.log("Adding column");
};
const removeRow = () => {
  const row = document.getElementsByClassName("row");
  const tableRow = Array.from(row);
  let length = tableRow.length - 1;
  tableRow[length].parentNode.removeChild(tableRow[length]);

  console.log("Removing Row");
};

const removeColumn = () => {
  columns--;

  const row = document.getElementsByClassName("row");
  const tableRow = Array.from(row);

  tableRow.forEach((cell) => {
    cell.removeChild(cell.lastChild);
  });

  console.log("Remove Column");
};
const selectColour = (colour) => {
  currentColour = colour;
};

const setColour = (cell) => {
  cell.style.backgroundColour = selectedColor;
  cell.classList.remove("uncoloured");
};

function handleEvents(cell) {
  //handles clicking
  cell.addEventListener("click", setColour(cell));

  //handles dragging/"drawing"
  cell.addEventListener("mousedown", (e) => {
    colouring = true;
  });

  cell.addEventListener("mousemove", (e) => {
    if (colouring)
      event.target.style.backgroundColor = selectedColor;
  });

  cell.addEventListener("mouseup", (e) => {
    if (colouring)
      colouring = false;
  });
}

const clearAll = () => {
  const allCells = document.getElementsByTagName("td");
  for (let i = 0; i < allCells.length; i++) {
    allCells[i].style.backgroundColor = "";
  }
};
