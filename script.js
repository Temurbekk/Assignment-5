let columns = 1;

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
