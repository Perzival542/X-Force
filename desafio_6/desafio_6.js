function keyboardOptions (digits) {
    const keyboard = {
        2 : ["a", "b", "c"],
        3 : ["d", "e", "f"],
        4 : ["g", "h", "i"],
        5 : ["j", "k", "l"],
        6 : ["m", "n", "o"],
        7 : ["p", "q", "r", "s"],
        8 : ["t", "u", "v"],
        9 : ["w", "x", "y", "z"]
    }

    console.log(keyboard[2]);

    const result = [];

    for(i=0; i < digits.length; i++) {
        for(j=0; j < keyboard[digits[i]].length; j++){
            console.log(keyboard[digits[i]][i], keyboard[parseInt(digits[i])+1][j])
        }
        for(j=0; j < keyboard[digits[i]].length; j++){
            console.log(keyboard[digits[i]][i], keyboard[parseInt(digits[i])+1][j])
        }
    }

}

const digits = "23";

keyboardOptions(digits);