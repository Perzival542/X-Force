[15:15, 3/8/2024] +54 9 3815 41-0959: const palabras = ["casa", "perro", "control", "luces","caja", "encendida", "rojo"];
const cantidadLetras = 5;

const palabrasCoincidentes = (array, n) =>{

    const palabrasEncontradas = array.filter((palabra) => palabra.length == n) ;
    return palabrasEncontradas;
}

console.log(palabrasCoincidentes(palabras, cantidadLetras));
[16:38, 3/8/2024] +54 9 3815 41-0959: let divisores = [];

let amigable = false;
const buscarDivisores = ((num) =>{


    for (let i = 1; i < num; i++) {

        if(num % i === 0){
            divisores.push(i);

        }
    
    }
const initialValue=0;

let totalNum = divisores.reduce((accumulator, currentValue)=> accumulator + currentValue, initialValue,);
return totalNum        
})

const num1 = 220;
const num2 =284;

if (buscarDivisores(num1) === num2 && buscarDivisores(num2) === num1){
    amigable = true;
}