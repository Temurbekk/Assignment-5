let columns = 1;

const addRow = () => {
  const table = document.getElementById("table");
  const row = document.createElement("tr");

  row.classList.add("row");
  table.appendChild(row);

  for (let i = 0; i < columns; i++) {
    const cell = document.createElement("td");
    cell.classList.add("cell");
    row.appendChild(cell);
  }
  //Making sure the function is being called
  console.log("Adding cell");
};
