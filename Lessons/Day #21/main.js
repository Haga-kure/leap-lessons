// document.addEventListener("scroll", function () {
//   const windowHeight = window.innerHeight;
//   const documentHeight = document.body.offsetHeight;
//   const targetScrollY = documentHeight - windowHeight;
//   const progress = Math.round((window.scrollY * 100) / targetScrollY);
//   console.log("progress is:", progress, "%");
// });

let windowHeight = window.innerHeight;
let documentHeight = document.body.offsetHeight;
let targetScrollY = documentHeight - windowHeight;

function getScrollTopPercent() {
  return Math.round((window.scrollY * 100) / targetScrollY);
}

function updateScrollProgress() {
  document.querySelector(".progress").innerHTML = getScrollTopPercent() + "%";
  document.querySelector(".progress-bar-inner").style.width =
    getScrollTopPercent() + "%";
}

document.addEventListener("scroll", updateScrollProgress);

window.addEventListener("resize", function () {
  windowHeight = window.innerHeight;
  documentHeight = document.body.offsetHeight;
  targetScrollY = documentHeight - windowHeight;
});

const runBoxTarger = document.querySelector(".run-box");

runBoxTarger.addEventListener("mouseenter", function () {
  runBoxTarger.classList.add("active");
});

runBoxTarger.addEventListener("mouseout", function () {
  runBoxTarger.classList.remove("active");
});
