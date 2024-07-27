// Funcion principal

function formaguarda(N, tipo, patron) {
    // Comprobacion de parametros vacios
    if(N !== null && N <= 0 || tipo !== null && tipo.length > 0 || patron !== null && patron.length > 0) {
        return console.error("Debe ingresarse los tres parametros y la cantidad de cuadros de la guarda debe ser mayor a cero");
    }

    // Comprobacion de los tipos de datos
    if (typeof N !== 'number' || typeof tipo !== 'string' || typeof patron !== 'string') {
        return console.error("Uno de los datos de los aprametros no es del tipo corespondiente");
    } else {
        const guarda = [];


        // Patron de la guarda
        if (tipo.toUpperCase() === "NORMAL") {
            while (guarda.length !== N) {
                for(i=0; i < patron.length && guarda.length < N; i++){
                    guarda.push(patron[i]);
                }
            }
            console.log(guarda);
        } else if (tipo.toUpperCase() === "ESPEJADA") {
            while (guarda.length !== N) {
                for(i=0; i < patron.length && guarda.length < N; i++){
                    guarda.push(patron[i]);
                }

                const reversePatron = patron.split("").reverse();

                for(j=0; j < reversePatron.length && guarda.length < N; j++){
                    guarda.push(reversePatron[j]);
                }
            }
            console.log(guarda);
        } else {
            console.error("El tipo de guarda ingresado no es correcto");
        }
    }
}

// Parametros de la funcion
const N = null;
const tipo = "normal";
const patron = 'abbab';

// Llamda a la funcion
formaguarda(N, tipo, patron);

