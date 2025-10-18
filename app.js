let elForm = document.querySelector(".form");
let elName = document.querySelector(".book-name");
let elYear = document.querySelector(".book-year");
let elAuthor = document.querySelector(".book-author");
let list = document.querySelector(".list");
let elBtn = document.querySelector(".btn");

let books = [];

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let book = {
    name: elName.value,
    year: elYear.value,
    author: elAuthor.value,
  };

  books.push(book);
  localStorage.setItem("books-data", JSON.stringify(books));T

  renderBooks(books, list);
  elForm.reset();
});

function renderBooks(arr, parent) {
  parent.innerHTMl = "";
  arr.forEach((el) => {
    let li = document.createElement("li");
    li.classList.add("item")
    li.innerHTML = `  <span class="item__title">${el.name}</span>
            <span class="item__year">${el.year}</span>
            <span class="item__author">${el.author}</span>
            <div>
                <i class="bi bi-trash"></i>
                <i class="bi bi-pencil-square"></i>
            </div>`;
    parent.appendChild(li);
  });
}

renderBooks(books, list);
