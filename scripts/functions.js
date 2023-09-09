import { root_url } from "./ url.js";
import { formPost, usersConteiner } from "./ variables.js";

formPost.onsubmit = (e) => {
  e.preventDefault();
  let form_data = new FormData(formPost);
  let data = Object.fromEntries(form_data);
  postNewUser(data);
};

function getUsers() {
  let url = `${root_url}/users`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => render(data));
}

function render(array) {
  usersConteiner.innerHTML = "";
  for (let el of array) {
    const div_card = document.createElement("div");
    const h2_name = document.createElement("h2");
    const p_info = document.createElement("p");
    const delete_btn = document.createElement("button");

    delete_btn.innerText = "X";
    delete_btn.className = "del_btn";
    div_card.className = "card";
    h2_name.innerHTML = `${el.name} ${el.id}`;
    p_info.innerHTML = `Возраст: ${el.age}<br>Зарплата: ${el.salary}<br>ID: ${el.job_id}`;

    usersConteiner.append(div_card);
    div_card.append(h2_name, p_info, delete_btn);

    delete_btn.addEventListener("click", () => {
      deleteUserByid(el.id);
    });
    // delete_btn.onclick = () => deleteUserByid(el.id);
  }
}

function postNewUser(obj) {
  let url = `${root_url}/user/create`;
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      getUsers();
    });
}

function deleteUserByid(id) {
  let url = `${root_url}/users/${id}`;
  fetch(url, { method: "DELETE" })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      getUsers();
    });
}

export { getUsers, postNewUser };
