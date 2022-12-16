let form = document.querySelector("form");
let ul = document.querySelector("ul");
let locItems = localStorage.items;

if (!locItems) {
  locItems = "[]";
}
let items = JSON.parse(locItems);

items.forEach((item) => {
  ul.innerHTML += `<li>${item}</li>`;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let text = e.target[0].value;
  items.push(text);
  localStorage.items = JSON.stringify(items);
  ul.innerHTML += `<li>${text}</li>`;
  e.target.reset();
});

let fisht = document.querySelector(".fisht");

fisht.addEventListener("click", () => {
  ul.innerHTML = "";
  localStorage.clear("locItems");
});
