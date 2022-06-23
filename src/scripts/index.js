import "../styles/index.scss";
import "../styles/common.scss";
import "../styles/colors.scss";
import "../styles/toggle.scss";

const compensationBtn = document.getElementById("compensation");
const modal = document.getElementById("modal");
const modalCloseBtn = document.querySelector(".modal-close");

compensationBtn.addEventListener("click", () => {
  modal.classList.toggle("is-open");
});

modalCloseBtn.addEventListener("click", () => {
  if (modal.classList.contains("is-open")) modal.classList.remove("is-open");
});
