let columns = 0;
let colouring = false;
var selectedColor = "#FFFFFF";
var colorPicker = document.getElementById("colorPicker");

function pickBlue() {
    selectedColor = "#00FFFF";
    colorPicker.textContent = "Color Selected: Blue"

}

function pickRed() {
    selectedColor = "#FF6666";
    colorPicker.textContent = "Color Selected: Red"

}

function pickWhite() {
    selectedColor = "#FFFFFF";
    colorPicker.textContent = "Color Selected: White"

}

const tableCells = document.getElementsByTagName("td");

const addRow = () => {
  if (columns === 0) columns = 1;
  const table = document.getElementById("table");
  const row = document.createElement("tr");

  row.classList.add("row");
  table.appendChild(row);

  let index = 0;

  while (index < columns) {
    const pixel = document.createElement("td");
    pixel.classList.add("pixel", "uncoloured");
    row.appendChild(pixel);
    index++;
  }

  for (let i = 0; i < tableCells.length; i++) {
    //Derrick's Code: This allows you to change the color of the cells
    //updated to call a general event handling function to allow for setting
    //colours via drag
    handleEvents(tableCells[i], true);
  }
  //Making sure the function is being called
  console.log("Adding cell");
};

const addColumn = () => {
  if (columns === 0) {
    columns = 1;
    addRow();
  }
  columns++;
  const row = document.getElementsByClassName("row");
  const tableRow = Array.from(row);

  tableRow.forEach((cell) => {
    const pixel = document.createElement("td");
    pixel.classList.add("pixel", "uncoloured");
    cell.appendChild(pixel);
  });

  for (let i = 0; i < tableCells.length; i++) {
    //Derrick's Code: This allows you to change the color of the cells
    //updated to call a general event handling function to allow for setting
    //colours via drag
    handleEvents(tableCells[i], true);
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
  cell.style.backgroundColor = selectedColor;
  cell.classList.remove("uncoloured");
};

function handleEvents(cell, newCell = false) {
  //handles clicking
  if (!newCell) cell.addEventListener("click", setColour(cell, newCells));

  //handles dragging/"drawing"
  cell.addEventListener("mousedown", (e) => {
    colouring = true;
  });

  cell.addEventListener("mousemove", (e) => {
    if (colouring) {
      e.target.style.backgroundColor = selectedColor;
      e.target.classList.remove("uncoloured");
    }
  });

  cell.addEventListener("mouseup", (e) => {
    if (colouring) colouring = false;
  });
}

const clearAll = () => {
  const allCells = document.getElementsByTagName("td");
  for (let i = 0; i < allCells.length; i++) {
    allCells[i].style.backgroundColor = "#FFFFFF";
    allCells[i].classList.add("uncoloured");
  }
};

const fillAll = () => {
  const allCells = document.getElementsByTagName("td");
  for (let i = 0; i < allCells.length; i++) {
    allCells[i].style.backgroundColor = selectedColor;
  }
};

const fillAllUncolored = () => {
  const unColoredCells = Array.from(
    document.getElementsByClassName("uncoloured")
  );
  const length = unColoredCells.length;
  for (let i = 0; i < length; i++) {
    unColoredCells[i].style.backgroundColor = selectedColor;
    unColoredCells[i].classList.remove("uncoloured");
  }
};

document.addEventListener("mouseup", (e) => {
  colouring = false;
});
