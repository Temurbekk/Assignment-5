let columns = 1;
let currentColour = "white"

const addRow = () => {
  const table = document.getElementById("table");
  const row = document.createElement("tr");

  row.classList.add("row");
  table.appendChild(row);

  for (let i = 0; i < columns; i++) {
    const pixel = document.createElement("td");
    pixel.classList.add("pixel");
    row.appendChild(pixel);
  }
  //Making sure the function is being called
  console.log("Adding cell");
};

const addColumn = () => {
  columns++;

  const row = document.getElementsByClassName("row");
  const tr = Array.from(row);

  tr.forEach((cell) => {
    const pixel = document.createElement("td");
    pixel.classList.add("pixel");
    cell.appendChild(pixel);
  });

  //Making sure the function is being called
  console.log("Adding column");
};

const selectColour = (colour) =>{
  currentColour=colour;
};

function setColour(cell){
  cell.style.backgroundColour = currentColour;
  cell.classList.remove("uncoloured");
}
