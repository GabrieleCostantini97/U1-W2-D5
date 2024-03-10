es1;


for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}
es 3;
for (let i = pets.length - 1; i >= 0; i--) {
    console.log(pets[i]);
  }

  es4;
  pets.push(pets[0]);
pets.splice(0, 1);
console.log(pets);


es5;

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "as123hd"; //accedo ad oggeto in posizione [i]; con operatore "." creo una nuova proprieta dell'oggetto; la valorizzo a "as123hd"
  console.log(cars[i]); // stampo oggetto
}
es6;

cars.push({
  brand: "fiat",
  model: "punto",
  color: "white",
  trims: ["eco", "sport"],
});

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.splice(cars[i].trims.length - 1, 1);
  console.log(cars[i].trims);
}
es7;
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
  console.log(justTrims[i]);
}
es8;

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color[0] === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

es9;
let i = 0;

while (numericArray[i] !== 32) {
  console.log(numericArray[i]);

  i++;
}
es10;
const newArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      newArray.push(1);
      break;
    case "b":
      newArray.push(2);
      break;
    case "c":
      newArray.push(3);
      break;
    case "d":
      newArray.push(4);
      break;
    case "e":
      newArray.push(5);
      break;
    case "f":
      newArray.push(6);
      break;
    case "g":
      newArray.push(7);
      break;
    case "h":
      newArray.push(8);
      break;
    case "i":
      newArray.push(9);
      break;
    case "l":
      newArray.push(10);
      break;
    case "m":
      newArray.push(11);
      break;
    case "n":
      newArray.push(12);
      break;
    case "o":
      newArray.push(13);
      break;
    case "p":
      newArray.push(14);
      break;
    case "q":
      newArray.push(15);
      break;
    case "r":
      newArray.push(16);
      break;
    case "s":
      newArray.push(17);
      break;
    case "t":
      newArray.push(18);
      break;
    case "u":
      newArray.push(19);
      break;
    case "v":
      newArray.push(20);
      break;
    case "z":
      newArray.push(21);
      break;
  }
}
console.log(newArray);
