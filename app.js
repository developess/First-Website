
var btn = document.getElementById('button');
var container = document.getElementById('tog');


btn.addEventListener('click',() => {
  if (btn.innerHTML === "See the code"){
    container.classList.remove("mod-cont");
    container.classList.add("mod-cont-active");
    btn.innerHTML = "Hide code"
  } else {
    container.classList.remove("mod-cont-active");
    container.classList.add("mod-cont");
    btn.innerHTML = "See the code"
  }
});
