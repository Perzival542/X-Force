function sanar(magia, vidaInicial, vidaActual, distancia){

    if( isNaN(magia) || isNaN(vidaInicial) || isNaN(vidaActual) || isNaN(distancia)){
        console.warn('Solo puede ingresar numeros enteros')
    }
    else{
        if (distancia <= 1) {
            while (magia > 0 && vidaActual < vidaInicial) {
                vidaRecuperada = vidaActual + 10; magia = magia - 3;
            }
            console.log(`se curo al luchador ${vidaRecuperada} puntos de vida`);
        } else {
            while (magia > 0 && vidaActual < vidaInicial) {
                vidaRecuperada = vidaActual + 10; magia = magia - 5;
            }
            console.log(`se curo al luchador ${vidaRecuperada} puntos de vida`);
        }

    }

};

const magia = 100;
const vidaInicial = 50;
const vidaActual = 10;
const distancia = 1;

sanar(magia, vidaInicial, vidaActual, distancia);