const url = "https://jsonplaceholder.typicode.com/users";

const email = document.querySelector("#email");
const userName = document.querySelector("#username");
const btn = document.querySelector("#btn");
const modal = document.querySelector(".modal");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  getData();
});

async function getData() {
  try {
    const response = await fetch(
      `${url}/?username=${userName.value}&email=${email.value}`
    );

    const data = await response.json();
    console.log(data);
    if (data.length !== 0) {
      modalAuthorization("Успешный вход!");
    } else {
      modalAuthorization("Не удалось войти!");
    }
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
}

function modalAuthorization(message) {
  modal.innerText = "";
  email.value = "";
  userName.value = "";

  const modalContent = document.createElement("div");
  const modalMessage = document.createElement("p");

  modalContent.classList.add("modal_content");
  modalMessage.classList.add("modal_massage");

  modalMessage.textContent = message;

  modal.style.display = "block";
  btn.disabled = true;

  setTimeout(() => {
    modal.style.display = "none";
    btn.disabled = false;
    console.log(btn);
  }, 3000);

  modalContent.append(modalMessage);
  modal.append(modalContent);
}
