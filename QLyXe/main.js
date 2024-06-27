let myCaseStudy = new Xe("Quản lý xe");
let p1 = new Product(
  "ô tô",
  "1",
  "Toyota",
  "Võ",
  "43A-12345",
  "Đen",
  "2022",
  "KH123456",
  "1212412"
);
let p2 = new Product(
  "xe máy",
  "2",
  "Honda",
  "Nguyễn",
  "43B-67890",
  "Trắng",
  "2021",
  "KH654321",
  "14124"
);
let p3 = new Product(
  "xe đạp",
  "3",
  "racing",
  "Văn Huy",
  "43C-11111",
  "Vàng",
  "2023",
  "KH112233",
  "124124"
);
myCaseStudy.addCar(p1);
myCaseStudy.addCar(p2);
myCaseStudy.addCar(p3);

console.log(myCaseStudy.listCar);
showAll();

function add() {
  let loaiXeInput = document.getElementById("loaiXe").value;
  let maXeInput = document.getElementById("maXe").value;
  let tenXeInput = document.getElementById("tenXe").value;
  let tenChuSoHuuInput = document.getElementById("tenChuSoHuu").value;
  let bienSoInput = document.getElementById("bienSo").value;
  let mauXeInput = document.getElementById("mauXe").value;
  let namDangKyInput = document.getElementById("namDangKy").value;
  let soKhungInput = document.getElementById("soKhung").value;
  let soMayInput = document.getElementById("soMay").value;

  let newProduct = new Product(
    loaiXeInput,
    maXeInput,
    tenXeInput,
    tenChuSoHuuInput,
    bienSoInput,
    mauXeInput,
    namDangKyInput,
    soKhungInput,
    soMayInput
  );

  myCaseStudy.addCar(newProduct);
  alert("Thêm thành công");
  showAll();
}

function remove(index) {
  let isConfirm = confirm("Bạn chắc chứ?");
  if (isConfirm) {
    myCaseStudy.removeCar(index);
    alert("Xóa thành công");
    showAll();
  }
}

function showFormEdit(index) {
  let oldProduct = myCaseStudy.getOneCar(index);
  document.getElementById("loaiXe").value = oldProduct.loaiXe;
  document.getElementById("maXe").value = oldProduct.maXe;
  document.getElementById("tenXe").value = oldProduct.tenXe;
  document.getElementById("tenChuSoHuu").value = oldProduct.tenChuSoHuu;
  document.getElementById("bienSo").value = oldProduct.bienSo;
  document.getElementById("mauXe").value = oldProduct.mauXe;
  document.getElementById("namDangKy").value = oldProduct.namDangKy;
  document.getElementById("soKhung").value = oldProduct.soKhung;
  document.getElementById("soMay").value = oldProduct.soMay;
  document.getElementById(
    "btn-save"
  ).innerHTML = `<button onclick="edit(${index})">Save</button>`;
}

function edit(index) {
  let loaiXeInput = document.getElementById("loaiXe").value;
  let maXeInput = document.getElementById("maXe").value;
  let tenXeInput = document.getElementById("tenXe").value;
  let tenChuSoHuuInput = document.getElementById("tenChuSoHuu").value;
  let bienSoInput = document.getElementById("bienSo").value;
  let mauXeInput = document.getElementById("mauXe").value;
  let namDangKyInput = document.getElementById("namDangKy").value;
  let soKhungInput = document.getElementById("soKhung").value;
  let soMayInput = document.getElementById("soMay").value;

  let newProduct = new Product(
    loaiXeInput,
    maXeInput,
    tenXeInput,
    tenChuSoHuuInput,
    bienSoInput,
    mauXeInput,
    namDangKyInput,
    soKhungInput,
    soMayInput
  );

  myCaseStudy.update(index, newProduct);
  showAll();
  clearForm();
  document.getElementById(
    "btn-save"
  ).innerHTML = `<button onclick="add()">Add</button>`;
}

function showAll() {
  let list = myCaseStudy.listCar;
  let str = `
    <tr>
      <th>Loại xe</th>
      <th>Mã xe</th>
      <th>Tên xe</th>
      <th>Tên chủ sở hữu</th>
      <th>Biển số</th>
      <th>Màu xe</th>
      <th>Năm đăng ký</th>
      <th>Số khung</th>
      <th>Số máy</th>
      <th colspan="2">Action</th>
    </tr>
  `;

  for (let i = 0; i < list.length; i++) {
    str += `
      <tr>
        <td>${list[i].loaiXe}</td>
        <td>${list[i].maXe}</td>
        <td>${list[i].tenXe}</td>
        <td>${list[i].tenChuSoHuu}</td>
        <td>${list[i].bienSo}</td>
        <td>${list[i].mauXe}</td>
        <td>${list[i].namDangKy}</td>
        <td>${list[i].soKhung}</td>
        <td>${list[i].soMay}</td>
        <td><button onclick="showFormEdit(${i})">Sửa</button></td>
        <td><button onclick="remove(${i})">Xóa</button></td>
      </tr>
    `;
  }

  document.getElementById("tableProduct").innerHTML = str;
}

function clearForm() {
  document.getElementById("loaiXe").value = "";
  document.getElementById("maXe").value = "";
  document.getElementById("tenXe").value = "";
  document.getElementById("tenChuSoHuu").value = "";
  document.getElementById("bienSo").value = "";
  document.getElementById("mauXe").value = "";
  document.getElementById("namDangKy").value = "";
  document.getElementById("soKhung").value = "";
  document.getElementById("soMay").value = "";
}

document.addEventListener("DOMContentLoaded", function () {
  showAll();
});
