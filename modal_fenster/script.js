const div_container = document.querySelector(".container");
const span_btn = document.querySelector(".highlight");
const div_paragraph = document.querySelector(".paragraph");

span_btn.addEventListener("click", () => {
  modalWindow();
});

function modalWindow() {
  const div_content = document.createElement("div");
  const p_content = document.createElement("p");
  const p_close = document.createElement("img");

  div_content.classList.add("modal-content");
  p_content.classList.add("content");
  p_close.classList.add("close");

  p_content.textContent =
    "resolved (выполнено): Состояние, в котором операция завершена успешно, и промис содержит результат.";
  p_close.src = "./1491313931-cross_82985.svg";

  p_close.addEventListener("click", () => {
    div_container.style.display = "none";
  });

  setTimeout(() => {
    div_container.style.display = "none";
  }, 3000);

  div_content.append(p_content, p_close);
  div_container.append(div_content);
  div_container.style.display = "block";
}

// const modal_container = document.querySelector(".modal_container");
// const openBtn = document.querySelector(".open");
// const closeBtn = document.querySelector(".close");

// openBtn.addEventListener("click", () => {
//   modal_container.classList.remove("close_status");
// });

// closeBtn.addEventListener("click", () => {
//   modal_container.classList.add("close_status");
// });
//
