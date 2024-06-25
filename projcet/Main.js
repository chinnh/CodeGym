let myStore = new Store("Cửa hàng của Huy");
let p1 = new Product(
  1,
  "SH",
  100,
  "https://imgs.search.brave.com/qZhrWQnhfkqWLe7gWz1NGrlw3xflRAn2o6TZhFRPGTs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kYWls/eW11YWJhbnhlLm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8xMC9TaC1Nb2Rl/LTEyNWNjLU1hdS1E/ZW4uanBn",
  12345,
  "Huy",
  "Trang"
);
myStore.addProduct(p1);
console.log(myStore.listProduct);
showAll();
function add() {
  let idInput = document.getElementById("id").value;
  let nameInput = document.getElementById("name").value;
  let priceInput = document.getElementById("price").value;
  let imgInput = document.getElementById("img").value;
  let bienxeInput = document.getElementById("bienxe").value;
  let tenchuInput = document.getElementById("tenchu").value;
  let mauInput = document.getElementById("mau").value;
  let newProduct = new Product(
    idInput,
    nameInput,
    priceInput,
    imgInput,
    bienxeInput,
    tenchuInput,
    mauInput
  );
  myStore.addProduct(newProduct);
  alert("Thêm Thành Công ");
  showAll();
}
function remove(index) {
  let isConfirm = confirm("Bạn Chắc Chứ");
  if (isConfirm) {
    myStore.removeProduct(index);
    alert("Xóa Thành Công ");
    showAll();
  }
}
function showFormEdit(index) {
  let oldProduct = myStore.getOneProduct(index);
  console.log(oldProduct);
  document.getElementById("id").value = oldProduct.id;
  document.getElementById("name").value = oldProduct.name;
  document.getElementById("price").value = oldProduct.price;
  document.getElementById("img").value = oldProduct.img;
  document.getElementById("bienxe").value = oldProduct.bienxe;
  document.getElementById("tenchu").value = oldProduct.tenchu;
  document.getElementById("mau").value = oldProduct.mau;
  document.getElementById("img-Edit").src = oldProduct.img;
  document.getElementById("img-Edit").style.display = "block";
  document.getElementById(
    "btn-save"
  ).innerHTML = `<button onclick="edit(${index})">Save</button> `;
}
function edit(index) {
  let idInput = document.getElementById("id").value;
  let nameInput = document.getElementById("name").value;
  let priceInput = document.getElementById("price").value;
  let imgInput = document.getElementById("img").value;
  let bienxeInput = document.getElementById("bienxe").value;
  let tenchuInput = document.getElementById("tenchu").value;
  let mauInput = document.getElementById("mau").value;
  let newProduct = new Product(
    idInput,
    nameInput,
    priceInput,
    imgInput,
    bienxeInput,
    tenchuInput,
    mauInput
  );
  myStore.update(index, newProduct);
  showAll();
  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("img").value = "";
  document.getElementById("bienxe").value = "";
  document.getElementById("tenchu").value = "";
  document.getElementById("mau").value = "";
  document.getElementById("img-Edit").src = " ";
  document.getElementById("img-Edit").style.display = "none";
  document.getElementById(
    "btn-save"
  ).innerHTML = `<button onclick="add()">Add</button> `;
}
function showAll() {
  let list = myStore.listProduct;
  let str = ` <tr>
        <th>ID</th>
        <th>Tên</th>
        <th>Giá</th>
        <th>Ảnh</th>
        <th>Biển Xe</th>
        <th>Tên Chủ</th>
        <th>Màu</th>
        <th colspan="2">Action</th>
      </tr>`;
  for (let i = 0; i < list.length; i++) {
    str += `<tr>
        <td>${list[i].id}</td>
        <td>${list[i].name}</td>
        <td>${list[i].price}</td>
        <td>
          <img
            src="${list[i].img}"
            alt=""
          />
        </td>
        <td>${list[i].bienxe}</td>
        <td>${list[i].tenchu}</td>
        <td>${list[i].mau}</td>
        <td><button onclick="showFormEdit(${i})">Sửa</button></td>
        <td><button onclick = "remove(${i})">Xóa</button></td>
      </tr>`;
  }
  document.getElementById("table-product").innerHTML = str;
}
