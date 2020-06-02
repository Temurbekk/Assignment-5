let columns = 1;
let currentColour = "white"

const addRow = () => {
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
  //Making sure the function is being called
  console.log("Adding cell");
};

const addColumn = () => {
  columns++;

  const row = document.getElementsByClassName("row");
  const tableRow = Array.from(row);

  tableRow.forEach((cell) => {
    const pixel = document.createElement("td");
    pixel.classList.add("pixel");
    cell.appendChild(pixel);
  });

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
const selectColour = (colour) =>{
  currentColour=colour;
};

function setColour(cell){
  cell.style.backgroundColour = currentColour;
  cell.classList.remove("uncoloured");
}
