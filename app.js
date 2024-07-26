//let ean = "401500096974";
let ean =   "401035527731";
//let ean = "426008068005";
let sum = 0;

for (let i = 0; i < ean.length; i++) {
  const value = ean.charCodeAt(i) - 48;
  if (i % 2 === 0) {
    sum = sum + value;
    console.log(i, "ist gerade");
  } else {
    sum = sum + 3 * value;
    console.log(i, "ist ungerade");
  }
}
console.log((10 - (sum % 10)) % 10);
