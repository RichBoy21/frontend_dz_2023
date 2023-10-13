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
const closeModal = document.querySelector("#closeModal");
const div_close = document.querySelector(".close");

const showMessage = document.createElement("div");
showMessage.classList.add("login_message");

login_modal.append(showMessage);

login_btn.addEventListener("click", (even) => {
  even.preventDefault();
  getData(email.value, username.value);
  showLoader();
});

close_modal.addEventListener("click", () => {
  login_modal.classList.add("hidden");
});

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
  showMessage.append(div_close);
  if (
    message === "Authenticated successfully!" ||
    "Order has been paid!" ||
    message === "Order created!" ||
    "Order is accepted!" ||
    "Order completed!"
  ) {
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

const address = document.querySelector("#address");
const unit_price = document.querySelector("#unit_price");
const price = document.querySelector("#price");
const pay = document.querySelector("#pay");
const send = document.querySelector("#send");
const accept = document.querySelector("#accept");
const complete = document.querySelector("#complete");

pay.addEventListener("click", () => {
  if (address.value && unit_price.value && price.value) {
    showLoader();
    getPost(address.value, unit_price.value, price.value, "pay");
  }
});

send.addEventListener("click", () => {
  if (address.value && unit_price.value && price.value) {
    showLoader();
    getPost(address.value, unit_price.value, price.value, "send");
  }
});

accept.addEventListener("click", () => {
  if (address.value && unit_price.value && price.value) {
    showLoader();
    getPost(address.value, unit_price.value, price.value, "accept");
  }
});

complete.addEventListener("click", () => {
  if (address.value && unit_price.value && price.value) {
    showLoader();
    getPost(address.value, unit_price.value, price.value, "complete");
  }
});

async function getPost(address, price, total, eventType) {
  try {
    const response = await fetch(urlPosts, {
      method: "POST",
      body: JSON.stringify({ address, price, total }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (response.status === 201) {
      const data = await response.json();
      processingOfPostRequest(data, eventType);
    } else {
      throw new Error("Error");
    }
  } catch (error) {
    console.error("Error", error);
  }
}

function showLoader() {
  loader.style.display = "block";
}
function hideLoader() {
  loader.style.display = "none";
}

const buttons = document.querySelectorAll("#btn");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const eventType = event.target.id;
    showLoader();
    getPost(address.value, unit_price.value, price.value, eventType);
  });
});

function processingOfPostRequest(data, eventType) {
  let message = "Payment failed. Please try again.";

  switch (eventType) {
    case "pay":
      message = "Order has been paid!";
      break;

    case "send":
      message = "Order created!";
      break;

    case "accept":
      message = "Order is accepted!";
      break;

    case "complete":
      message = "Order completed!";
      break;
  }

  if (data.length !== 0) {
    showModal(message);
  } else {
    showModal("Payment failed. Please try again.");
  }

  address.value = "";
  unit_price.value = "";
  price.value = "";

  hideLoader();
}
