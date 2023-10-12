const url = "https://jsonplaceholder.typicode.com/users";
const urlPosts = "https://jsonplaceholder.typicode.com/posts";

const container = document.querySelector(".container");
const email = document.querySelector("#email");
const username = document.querySelector("#username");
const login_btn = document.querySelector("#btn_login");
const login_modal = document.querySelector(".login_modal");
const close_modal = document.querySelector(".close");
login_modal.classList.add("hidden");
const container_two = document.querySelector(".container_two");
const container_buttons = document.querySelector(".container_buttons");
const loader = document.querySelector("#loader");

const showMessage = document.createElement("div");
showMessage.classList.add("login_message");
login_modal.append(showMessage);

login_btn.addEventListener("click", (even) => {
  even.preventDefault();
  showLoader();
  getData(email.value, username.value);
});

// close_modal.addEventListener("click", () => {
//   login_modal.classList.add("hidden");
// });

async function getData(email, username) {
  try {
    const response = await fetch(`${url}/?email=${email}&username=${username}`);
    const data = await response.json();

    processingOfRequest(data);
  } catch (error) {
    console.log("error", error);
  }
}

function processingOfRequest(data) {
  if (data.length !== 0) {
    showModal("Authenticated successfully!");
  } else showModal("Authentication failed!");

  email.value = "";
  username.value = "";
  hideLoader();
}

function showModal(message) {
  showMessage.textContent = message;

  if (message === "Authenticated successfully!") {
    showMessage.style.color = "green";
    container_two.style.display = "block";
    container_buttons.querySelectorAll(".btn").forEach((button) => {
      button.style.display = "block";
    });
    container.style.display = "none";
  } else showMessage.style.color = "red";

  login_modal.classList.remove("hidden");

  setTimeout(() => {
    login_modal.classList.add("hidden");
  }, 3000);
}

function showLoader() {
  loader.style.display = "block";
}
function hideLoader() {
  loader.style.display = "none";
}
