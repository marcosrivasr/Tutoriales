const numeros = Array(20000).fill(5);

// foreach()
console.time('foreach()');
const res01 = numeros.forEach(x => x * 5);
console.timeEnd('foreach()');

// map()
console.time('map()');
const res02 = numeros.map(x => x * 5);
console.timeEnd('map()');
