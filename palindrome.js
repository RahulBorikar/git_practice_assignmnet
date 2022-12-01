let string = "racecar hi";

let reverse = "";

flag = false;

for (let i = string.length - 1; i >= 0; i--) {
  reverse += string[i];
}

for (let i = 0; i <= string.length - 1; i++) {
  if (string[i] === reverse[i]) {
    flag = true;
  }
}
console.log(flag);


