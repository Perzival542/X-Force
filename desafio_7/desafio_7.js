et divisores = [];

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