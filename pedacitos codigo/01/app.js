const numero = 35;
const palabra = "Hola";
const items = [2,5,6,8,3];
const resultado = numero === palabra;
const suma = (n1, n2) => n1 + n2;
const alumno = {id: 5, nombre: 'Marcos'};

// Diferencia entre typeof vs instanceof


console.log(items instanceof Array);

console.log(suma instanceof Function);
console.log(alumno instanceof Object);