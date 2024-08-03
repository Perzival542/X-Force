const palabras = ["casa", "perro", "control", "luces","caja", "encendida", "rojo"];
const cantidadLetras = 5;

const palabrasCoincidentes = (array, n) =>{

    const palabrasEncontradas = array.filter((palabra) => palabra.length == n) ;
    return palabrasEncontradas;
}

console.log(palabrasCoincidentes(palabras, cantidadLetras));