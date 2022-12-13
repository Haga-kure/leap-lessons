const input = prompt("Too");
function isPalindrome(data) {
  data === data.split("").reverse().join("");
}
console.log(isPalindrome(input));
