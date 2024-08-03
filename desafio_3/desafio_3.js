function cesarCipher(text, displacement) {
    let result = "";

    for(i=0; i < text.length; i++) {
        if(text[i] !== " ") {
            let ascii = text.charCodeAt(i);

            if(ascii >= 122) {
                ascii = 97;
            }

            result += String.fromCharCode(ascii + displacement);

        } else {
            result += text[i];
        }
    }
    console.log("Mensaje Original:", text);
    console.log("Mensaje Cifrado:", result);
}

const text = "hola mundo";
const displacement = 3

cesarCipher(text, displacement);