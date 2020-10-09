//cpu info 
const os = require('os');

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();

console.log(cpu);
console.log(sistema);
console.log(usuario);



let fs = require('fs');
let cpu_string = JSON.stringify(cpu);

fs.appendFile('node.txt', `Info cpu: ${cpu_string}`, (error) => {
    if (error) {
        console.log('Error al crear archivo');
    }
});

//Requerir hi
const hi = require('./hi');

console.log(hi.hola);
hi.sayHi();