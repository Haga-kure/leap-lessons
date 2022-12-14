const todoTarget = document.querySelector("#todoTarget");
const testTarget = document.querySelector("#testTarget");
const inputTarget = document.querySelector("#inputTarget");
const listTarget = document.querySelector("#listTarget");

inputTarget.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    testTarget.innerHTML = e.target.value;
  }
});
// parentNode.removeChild(childNode)
// firstLi.parentNode.removeChild(firstLi)

// listTarget.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     listTarget.innerHTML = e.target.value;
//   }
// });
