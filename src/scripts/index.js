import "../styles/index.scss";
import "../styles/common.scss";
import "../styles/colors.scss";
import "../styles/toggle.scss";
import "../styles/modal.scss";

import "./modal.js";
import { data } from "./data.js";

const dropdownSelect = document.querySelector("select");
let dropdownValue = "all";

const components = Object.keys(data.year1); // salary components
components.pop();

const years = Object.keys(data); // years

const switchList = document.getElementsByClassName("switch"); //list of all toggle switches

//functions

const setTotal = () => {
  for (let key in data) {
    const valueSpan = document.querySelector(`.graph .${key} .total-salary`);
    valueSpan.innerHTML = "$ " + data[key].total;
  }
};

const setCategoryTotal = () => {
  if (dropdownValue === "all") {
    for (let key of components) {
      const total = years.reduce((x, y) => x + parseInt(data[y][key]), 0);
      const valueSpan = document.querySelector(`.components .${key} span`);
      valueSpan.innerHTML = "$ " + total;
    }
  }
};

const setBarHeight = () => {
  for (let year of years) {
    for (let key of components) {
      const bar = document.querySelector(`.graph .${year} .${key}`);
      bar.style.height = `${data[year][key]}` / 600 + "px";
    }
  }
};

const updateValues = year => {
  for (let key of components) {
    const valueSpan = document.querySelector(`.components .${key} span`);
    valueSpan.innerHTML = "$ " + data[year][key];
  }
};

const handleToggle = e => {
  if (dropdownValue !== "all") handleTogglePerYear(e);
  else handleToggleAll(e);
};

const handleTogglePerYear = e => {
  const targetSwitch = e.target;
  const toggle = targetSwitch.querySelector(".toggle");
  const toggleClass = toggle.classList[1];
  const yearTag = document.querySelector(`.${dropdownValue}`);
  const bar = yearTag.querySelector(`.${toggleClass}`);

  if (e.target.classList.contains("toggle-off")) {
    e.target.classList.remove("toggle-off");
    bar.style.display = "block";
  } else {
    e.target.classList.add("toggle-off");
    bar.style.display = "none";
  }
};

const handleToggleAll = e => {
  const targetSwitch = e.target;
  const toggle = targetSwitch.querySelector(".toggle");
  const toggleClass = toggle.classList[1];

  if (targetSwitch.classList.contains("toggle-off")) {
    targetSwitch.classList.remove("toggle-off");
  } else {
    targetSwitch.classList.add("toggle-off");
  }

  Array.from(years).forEach((year) => {
    const yearTag = document.querySelector(`.${year}`);
    const bar = yearTag.querySelector(`.${toggleClass}`);
    if (targetSwitch.classList.contains("toggle-off")) {
      bar.style.display = "none";
    } else {
      bar.style.display = "block";
    }
  });
};

const resetToggle = () => {
  Array.from(switchList).forEach((element) => {
    if (element.classList.contains("toggle-off"))
      element.classList.remove("toggle-off");
  });
};

const resetBarHeight = () => {
  Array.from(years).forEach((year) => {
    Array.from(components).forEach((component) => {
      const x = document.querySelector(`.${year} .${component}`);
      x.style.display = "block";
    });
  });
};

// event listeners

dropdownSelect.addEventListener("change", (e) => {
  dropdownValue = e.target.value;
  resetToggle();
  resetBarHeight();
  if (dropdownValue === "all") {
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

Array.from(switchList).forEach((element) => {
  element.addEventListener("click", handleToggle);
});
