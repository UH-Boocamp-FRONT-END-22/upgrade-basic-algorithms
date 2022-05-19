console.log("Archivo JS funcionando OK");

// Iteración 2

// 1.1

let character = { name: "Jack Sparrow", age: 10 }; // Cambiado de constn a let para que pueda variar el valor.
character = { name: "Jack Sparrow", age: 25 };

console.log(character);

// 1.2

const firstName = "Jon";
const lastName = "Snow";
const age = 24;

console.log(
  "Soy",
  firstName,
  lastName,
  "tengo",
  age,
  "años y me gustan los lobos"
);

// 1.3

const toy1 = { name: "Buss myYear", price: 19 };
const toy2 = { name: "Rallo mcKing", price: 29 };

console.log(
  "La suma de precios de los dos juguetes es",
  toy1.price + toy2.price
);

// 1.4

let globalBasePrice = 10000;
let car1 = { name: "BMW m&m", basePrice: 50000, finalPrice: 60000 }; // Se cambia de const a let para poder cambiar el valor de la variable
let car2 = { name: "Chevrolet Corbina", basePrice: 70000, finalPrice: 80000 }; // Igual

globalBasePrice = 25000;

car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;

console.log("El precio del coche 1 es", car1.finalPrice);
console.log("El precio del coche 2 es", car2.finalPrice);