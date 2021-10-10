console.log("Hello 🌎");
let id = 1;



function show(id_par) {
  var x = document.querySelector(".modal");
  id = id_par;
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  } 
}

const btn_1 = document.querySelector(".btn_1");
const btn_2 = document.querySelector(".btn_2");
const btn_3 = document.querySelector(".btn_3");
const btn_4 = document.querySelector(".btn_4");

btn_1.onclick = function() {show(1);}
btn_2.onclick = function() {show(2);}
btn_3.onclick = function() {show(3);}
btn_4.onclick = function() {show(4);}

const close = document.querySelector(".close-button");

close.onclick = function() {
  var x = document.querySelector(".modal");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
