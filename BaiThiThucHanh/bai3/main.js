let soCuaToi = new soTietKiem("Sổ Tiết Kiệm");
let p1 = new product("12345", "hihi", "Văn Huy", 4311111, "1/1/2022", 2023);
soCuaToi.addSo(p1);
console.log(soCuaToi.listSo);
showAll();
function add() {
    
  let maSoInput = document.getElementById("maSo").value;
  let loaiTietKiemInput = document.getElementById("loaiTietKiem").value;
  let hoTenInput = document.getElementById("hoTen").value;
  let cmndInput = document.getElementById("cmnd").value;
  let ngayMoInput = document.getElementById("ngayMo").value;
  let soTienInput = document.getElementById("soTien").value;

  let newProduct = new product(
    maSoInput,
    loaiTietKiemInput,
    hoTenInput,
    cmndInput,
    ngayMoInput,
    soTienInput
  );
  soCuaToi.addSo(newProduct);
  alert("Loại sổ bạn vừa mới thêm là " + loaiTietKiemInput);
  showAll();
}
function remove() {
  let maSoInput = prompt("Nhập mã sổ bạn muốn xóa:");
  let found = false;
  if (maSoInput) {
    for (let i = 0; i < soCuaToi.listSo.length; i++) {
      if (soCuaToi.listSo[i].maSo === maSoInput) {
        let isConfirm = confirm("Bạn chắc chắn muốn xóa ");
        if (isConfirm) {
          soCuaToi.removeSo(i);
          alert("Xóa thành công");
          showAll();
        }
        found = true;
        break;
      }
    }
    if (!found) {
      alert("Không tìm thấy mã sổ " + maSoInput + " vui lòng nhập lại.");
    }
  }
}
function showAll() {
  let list = soCuaToi.listSo;
  let str = `
      <tr>
        <th>Mã Sổ</th>
        <th>Loại Tiết Kiệm</th>
        <th>Họ Tên Khách Hàng</th>
        <th>Chứng Minh Nhân Dân</th>
        <th>Ngày Mở Sổ</th>
        <th>Số Tiền Gửi</th>        
        <th>Action</th>
      </tr>
    `;

  for (let i = 0; i < list.length; i++) {
    str += `
        <tr>
          <td>${list[i].maSo}</td>
          <td>${list[i].loaiTietKiem}</td>
          <td>${list[i].hoTen}</td>
          <td>${list[i].cmnd}</td>
          <td>${list[i].ngayMo}</td>
          <td>${list[i].soTien}</td>          
          <td><button onclick="remove(${i})">Xóa</button></td>
        </tr>
      `;
  }
  document.getElementById("tableProduct").innerHTML = str;
}
document.addEventListener("DOMContentLoaded", function () {
  showAll();
});
