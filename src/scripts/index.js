import "../styles/index.scss";
import "../styles/common.scss";
import "../styles/colors.scss";
import "../styles/toggle.scss";
import "../styles/modal.scss";

import "./modal.js";
import { data } from "./data.js";

// Functions

const dropdownSelect = document.querySelector("select");
let dropdownValue = "all";
// salary components
const components = Object.keys(data.year1);
components.pop();
// years
const years = Object.keys(data);

const updateAll = () => {
  console.log("all");
};

// const updateTotal = year => {
//   const val =  document.querySelector(`.graph .${year} .total-salary`);
//   val.innerHTML = data[year].total;
// };

const setTotal = () => {
  for(let key in data) {
    const val = document.querySelector(`.graph .${key} .total-salary`);
    val.innerHTML = '$ ' + data[key].total;
  }
};

const setCategoryTotal = () => {
  if(dropdownValue === "all") {
    for (let key of components) {
      const total = years.reduce((x,y) => x + parseInt(data[y][key]) , 0);
      const valueSpan = document.querySelector(`.components .${key} span`);
      valueSpan.innerHTML = "$ " + total;
    }
  }
};

const setBarHeight = () => {
  for(let year of years) {
    for (let key of components) {
      const bar = document.querySelector(`.graph .${year} .${key}`);
      bar.style.height = `${data[year][key]}` / 600 + "px";
    }
  }
};

const updateValues = year => {
  for(let key of components) {
    const valueSpan = document.querySelector(`.components .${key} span`);
    valueSpan.innerHTML = "$ " + data[year][key];
  }
};

dropdownSelect.addEventListener("change", (e) => {
  dropdownValue = e.target.value;
  if (dropdownValue === "all") {
    updateAll();
    setCategoryTotal();
  } else {
    updateValues(dropdownValue);
  }
});

// using DOMContentLoaded because have to set values before page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    setTotal();
    setCategoryTotal();
    setBarHeight();
});
