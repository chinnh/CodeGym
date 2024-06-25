let myStore = new Store("Quang's Bookstore");

showAll();

function add() {
  let idInput = document.getElementById("id").value;
  let titleInput = document.getElementById("title").value;
  let authorInput = document.getElementById("author").value;
  let priceInput = document.getElementById("price").value;
  let imgInput = document.getElementById("img").value;
  let newBook = new Book(idInput, titleInput, authorInput, priceInput, imgInput);
  myStore.addBook(newBook);
  alert("Thêm thành công");
  showAll();
}

function remove(index) {
  let isConfirm = confirm("Bạn có chắc không?");
  if (isConfirm) {
    myStore.removeBook(index);
    alert("Đã xóa thành công");
    showAll();
  }
}

function showFormEdit(index) {
  let oldBook = myStore.getOneBook(index);
  document.getElementById("id").value = oldBook.id;
  document.getElementById("title").value = oldBook.title;
  document.getElementById("author").value = oldBook.author;
  document.getElementById("price").value = oldBook.price;
  document.getElementById("img").value = oldBook.img;
  document.getElementById("img-edit").style.display = "block";
  document.getElementById("img-edit").src = oldBook.img;
  document.getElementById(
    "btn-save"
  ).innerHTML = `<button onclick="edit(${index})">Save</button>`;
}

function edit(index) {
  let idInput = document.getElementById("id").value;
  let titleInput = document.getElementById("title").value;
  let authorInput = document.getElementById("author").value;
  let priceInput = document.getElementById("price").value;
  let imgInput = document.getElementById("img").value;
  let newBook = new Book(idInput, titleInput, authorInput, priceInput, imgInput);
  myStore.update(index, newBook);
  showAll();
  document.getElementById("id").value = "";
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("price").value = "";
  document.getElementById("img").value = "";
  document.getElementById("img-edit").style.display = "none";
  document.getElementById(
    "btn-save"
  ).innerHTML = `<button onclick="add()">Add</button>`;
}

function showAll() {
  let list = myStore.listBooks;
  let str = `
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Image</th>
            <th colspan="2">Action</th>
        </tr>
    `;
  for (let i = 0; i < list.length; i++) {
    str += `
        <tr>
            <td>${list[i].id}</td>
            <td>${list[i].title}</td>
            <td>${list[i].author}</td>
            <td>${list[i].price}</td>
            <td><img src="${list[i].img}" alt="Book Image" style="border: 1px solid #000;"></td>
            <td><button onclick="showFormEdit(${i})">Edit</button></td>
            <td><button onclick="remove(${i})">Delete</button></td>
        </tr>
        `;
  }
  document.getElementById("table-books").innerHTML = str;
}