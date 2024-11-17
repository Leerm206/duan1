let danhdau = false;
function out(id) {
  if (danhdau == true) {
    if (id == "/" || id == "*" || id == "+" || id == "-") {
      document.getElementById("hienthi").value += id;
    } else {
      document.getElementById("hienthi").value = id;
    }
    danhdau = false;
  } else {
    document.getElementById("hienthi").value += id;
  }
}
function xoa() {
  document.getElementById("hienthi").value = "";
}
function kq() {
  let str = document.getElementById("hienthi").value;
  if (str.includes("/")) {
    let lst = str.split("/");
    let a = Number(lst[0]);
    let b = Number(lst[1]);
    if (b !== 0) {
      let c = a / b;
      document.getElementById("hienthi").value = c;
    } else {
      document.getElementById("hienthi").value = "ERROR";
    }
  }
  if (str.includes("+")) {
    let lst = str.split("+");
    let a = Number(lst[0]);
    let b = Number(lst[1]);
    let c = a + b;
    document.getElementById("hienthi").value = c;
  }
  if (str.includes("-")) {
    let lst = str.split("-");
    let a = Number(lst[0]);
    let b = Number(lst[1]);
    let c = a - b;
    document.getElementById("hienthi").value = c;
  }
  if (str.includes("*")) {
    let lst = str.split("*");
    let a = Number(lst[0]);
    let b = Number(lst[1]);
    let c = a * b;
    document.getElementById("hienthi").value = c;
  }
  danhdau = true;
}
