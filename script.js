function clearAll() {
  //get all cells in the .html
  let cells = document.getElementsById("td");
  let arrOfCells = [...cells]
  //for every cell, change the colour to white and mark it uncoloured
  cells.forEach((val) => {
    val.style.backgroundColor = "white";
    val.classList.add("uncoloured");
  });
}
