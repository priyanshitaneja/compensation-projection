import { data } from "./data.js";

const years = Object.keys(data);
const components = Object.keys(data.year1);

// modal open and close
const compensationBtn = document.getElementById("compensation");
const modal = document.getElementById("modal");
const modalCloseBtn = document.querySelector(".modal-close");

let firstClick = 0;

compensationBtn.addEventListener("click", () => {
  modal.classList.toggle("is-open");
  if(firstClick === 0) {
    firstClick = 1;
    fillTable();
  }
});

modalCloseBtn.addEventListener("click", () => {
  if (modal.classList.contains("is-open")) modal.classList.remove("is-open");
});

//creating table structure
let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

let row0 = document.createElement("tr");
let row1 = document.createElement("tr");
let row2 = document.createElement("tr");
let row3 = document.createElement("tr");
let row4 = document.createElement("tr");
let row5 = document.createElement("tr");
let row6 = document.createElement("tr");

table.className = "modal-table";

row0.setAttribute("id", "row0");
row1.setAttribute("id", "row1");
row2.setAttribute("id", "row2");
row3.setAttribute("id", "row3");
row4.setAttribute("id", "row4");
row5.setAttribute("id", "row5");
row6.setAttribute("id", "row6");

table.appendChild(thead);
table.appendChild(tbody);
thead.appendChild(row0);
tbody.appendChild(row1);
tbody.appendChild(row2);
tbody.appendChild(row3);
tbody.appendChild(row4);
tbody.appendChild(row5);
tbody.appendChild(row6);

export const fillTable = () => {

  document.getElementById("modal").appendChild(table);

  let componentHeading = document.createElement("th");
  componentHeading.innerHTML = "Components";
  componentHeading.className = "component-heading";
  row0.appendChild(componentHeading);

  for (let i in years) {
    const colHeading = document.createElement("th");
    const yearCount = parseInt(i) + 1;
    colHeading.innerHTML = "Year" + yearCount;
    row0.appendChild(colHeading);
  }

  for (let i in components) {
    const rowHeading = document.createElement("td");
    rowHeading.className = "component-name";
    rowHeading.innerHTML = components[i];
    const rowId = `row${parseInt(i) + 1}`;
    const x = document.getElementById(rowId);
    x.appendChild(rowHeading);
  }

  for (let i in years) {
    for (let j in components) {
      const tableData = document.createElement("td");
      tableData.innerHTML = "$" + data[years[i]][components[j]];
      const rowId = `row${parseInt(j) + 1}`;
      const x = document.getElementById(rowId);
      x.appendChild(tableData);
    }
  }
};

