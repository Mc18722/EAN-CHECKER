let numberString = "1234";
console.log(numberString);
console.log(numberString[0]);
console.log(numberString[1]);
console.log(numberString[2]);
console.log(numberString[3]);

let number = 0;

for (let i = 0; i < 4; i++) {
  const num = numberString.charCodeAt(i) - 48;
  console.log(numberString[i], numberString.charCodeAt(i), numberString.charCodeAt(i) - 48);
  number = number * 10;
  number = number + num;
}
console.log(number);