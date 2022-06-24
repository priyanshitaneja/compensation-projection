import { data } from "./data.js";

const years = Object.keys(data);
const components = Object.keys(data.year1);

// modal open and close
const compensationBtn = document.getElementById("compensation");
const modal = document.getElementById("modal");
const modalCloseBtn = document.querySelector(".modal-close");

compensationBtn.addEventListener("click", () => {
  modal.classList.toggle("is-open");
});

modalCloseBtn.addEventListener("click", () => {
  if (modal.classList.contains("is-open")) modal.classList.remove("is-open");
});

//table
let table = document.createElement("table");
table.className = "modal-table";
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);
// table.setAttribute("border", "1");

// Adding the entire table to the modal
document.getElementById("modal").appendChild(table);

// Creating and adding data to first row of the table
// const rowCount = 7;
// for (let i = 0; i < rowCount; i++) {
//   let row = `row${i}`;
//   row.setAttribute("id", `row${i}`);
// }
let row0 = document.createElement("tr");
row0.setAttribute("id", "row0");
let row1 = document.createElement("tr");
row1.setAttribute("id", "row1");
let row2 = document.createElement("tr");
row2.setAttribute("id", "row2");
let row3 = document.createElement("tr");
row3.setAttribute("id", "row3");
let row4 = document.createElement("tr");
row4.setAttribute("id", "row4");
let row5 = document.createElement("tr");
row5.setAttribute("id", "row5");
let row6 = document.createElement("tr");
row6.setAttribute("id", "row6");

let componentHeading = document.createElement("th");
componentHeading.innerHTML = "Components";
componentHeading.className = "component-heading";

row0.appendChild(componentHeading);

window.onload = () => {
  // remove this and execute this whole script when modal is opened only

  for (let i in years) {
    const colHeading = document.createElement("th");
    const yearCount = parseInt(i) + 1;
    colHeading.innerHTML = "Year" + yearCount;
    row0.appendChild(colHeading);
  }

  for (let i in components) {
    const rowHeading = document.createElement("td");
    rowHeading.className = "component-name";
    rowHeading.innerHTML = components[i]; //change first letter to upper case
    const rowId = `row${parseInt(i) + 1}`;
    const x = document.getElementById(rowId);
    x.appendChild(rowHeading);
  }

  for (let i in years) {
    for (let j in components) {
      const tableData = document.createElement("td");
      tableData.innerHTML = '$' + data[years[i]][components[j]];
      const rowId = `row${parseInt(j) + 1}`;
      const x = document.getElementById(rowId);
      x.appendChild(tableData);
    }
  }

};

thead.appendChild(row0);
tbody.appendChild(row1);
tbody.appendChild(row2);
tbody.appendChild(row3);
tbody.appendChild(row4);
tbody.appendChild(row5);
tbody.appendChild(row6);
