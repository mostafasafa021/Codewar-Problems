String.prototype.isUpperCase = function () {
  // your code here
  let regex = /\w/
  for (let i = 0; i < this.length; i++) {
    if (this[i] === this[i].toLowerCase() && regex.test(this[i])) return false

  };
  return true
}
let name = "BOB WALKS HIS DOG EVERY DAY.";

console.log(name.isUpperCase());


