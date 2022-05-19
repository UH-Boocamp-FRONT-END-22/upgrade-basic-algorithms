// 1.1 Consigue el valor "HULK" del array de cars y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

const avenger = avengers[0];

console.log(avenger);

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

avengers.unshift("IRONMAN");

console.log(avengers);

// 1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

alert(avengers.length);

// 1.4 Añade 2 elementos al array: "Morty" y "Summer".
// Muestra en consola el último personaje del array
const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters1.push("Morty", "Summer");

console.log("Añadimos a Morty y Summer al array -->", rickAndMortyCharacters1);

let ultimoRickandMorty =
  rickAndMortyCharacters1[rickAndMortyCharacters1.length - 1];

console.log("Mostramos el último personaje del array -->", ultimoRickandMorty);

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters2 = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];

rickAndMortyCharacters2.pop();
console.log("Eliminamos a Lapiz Lopez del array -->", rickAndMortyCharacters2);

let primeroRickAndMorty2 = rickAndMortyCharacters2[0];

let ultimoRickandMorty2 = rickAndMortyCharacters2[rickAndMortyCharacters2.length - 1];

console.log("En el array rickAndMortyCharacters2 el primer elemento es "+ primeroRickAndMorty2 +" y el último es "+ ultimoRickandMorty2);

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters3.splice(1,1);
console.log("Eliminamos el segundo elemento del array rickAndMortyCharacters3 -->", rickAndMortyCharacters3);
