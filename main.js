const hienthi = document.querySelector(".box1");
str = "";
str1 = "";
str2 = "";
function out(id) {
  let a = document.getElementById(id);
  a.onclick = function () {
    hienthi.innerHTML += id;
  };
}
function clearContent() {
  hienthi.innerHTML = "";
  str = "";
  str1 = "";
}
function kq() {
  console.log(str);
  console.log(str1);
}
