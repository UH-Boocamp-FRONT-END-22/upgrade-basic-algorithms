// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
for (let index = 0; index < 10; index++){
    console.log("El bucle muestra los números del 0 al 9", index);
}

// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
// cuando el resto del numero dividido entre 2 sea 0.
for (let resto = 0; resto < 10; resto++){
    if (resto / 2 === 0){
        console.log("El número mostrado es igual a 0 si lo divides entre 2", resto);
    };
};

// 1.3 Crea un bucle para conseguir dormir contando ovejas. 
// Este bucle empieza en 0 y termina en 10. 
// Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
// y cambia el mensaje en la última vuelta a 'Dormido!'.

for (let dormir = 0; dormir < 10; dormir++){
    if (dormir <= 8){
        console.log("Intentando dormir", dormir)
    } else {
        console.log("Dormido!")
    }

}