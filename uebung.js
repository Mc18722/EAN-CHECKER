let istHungrig = true;
if (istHungrig) {
  console.log("zeit zum essen");
}

let: alterDesZuschauers = 17;
if (alterDesZuschauers < 18) {
  console.log("zutritt leider nicht gestatet");
} else if (alterDesZuschauers > 18) {
  console.log("zutritt gestatet");
}

let tag = "donnerstag";
switch (tag) {
  case "montag":
    console.log("arbeitstag homeoffice");
    break;
  case "dienstag":
    console.log("arbeitstag lws");
    break;
  case "mittwoch":
    console.log("arbeitstag lws");
    break;
  case "donnerstag":
    console.log("arbeitstag lws");
    break;
  case "freitag":
    console.log("arbeitstag homeoffice");
    break;
  default:
    console.log("wochenende");
}

for (let i = 1; i <= 5; i++) {
  console.log(`schritt ${i} von 5 geschafft!`);
}

const todos = ["müll rausbringen", "spülmaschine ein/ausräumen", "einkaufen"];
for (let i = 0; i < todos.length; i++) {
  console.log(`aufgabe ${i + 1}: ${todos[i]}`);
}
let akkuzustand = 80;
while (akkuzustand > 0) {
  console.log(`noch ${akkuzustand}% akkuzustand`);
  akkuzustand -= 10;
}

let meinErsterSet = new Set(["apfel", "banane", "apfel", "kirsche"]);
console.log(meinErsterSet); // {'apfel', 'banane', 'kirsche'}
