function comprobar(cadena) {
    let parentesisAbiertos = 0;
    let parentesisCerrados = 0;

    for (let index = 0; index < cadena.length; index++) {
        if(cadena.at(index) === "("){
            parentesisAbiertos ++

        }

        if (cadena.at(index) === ")") {
            parentesisCerrados ++;
        }
    }


    if ((parentesisAbiertos - parentesisCerrados) === 0) {
        console.log("true")
    }

    else{
        console.log("false")
    }
}

comprobar("((()))")