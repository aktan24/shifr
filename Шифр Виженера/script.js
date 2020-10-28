const alphabet = ["A", "B", "C",
    "D", "E", "F", "G",
    "H", "I", "J", "K",
    "L", "M", "N", "O",
    "P", "Q", "R", "S",
    "T", "U", "V", "W",
    "X", "Y", "Z"]


function setKeyLen(message, key){
    if(message.length > key.length){
        let c = message.length - key.length
        for(let i = 0; i < c; i++){
            key = key + key[i]
        }
        return key
    }
    return key
}

function art(enCodedText){  
    let div = document.getElementById("encr")
    let p = document.createElement("p")
    p.innerHTML = ("CIPHER TEXT: " + enCodedText)
    div.appendChild(p)
}

function shifr(){
    let message = document.getElementById("mess").value
    let key = document.getElementById('keys').value  

    encrypt(alphabet,message, key)
}

function encrypt(alphabet, message, key){
    let enCodedText = ""
    let newKey = setKeyLen(message, key)

    for(let j = 0; j < message.length; j++){
        let symbol = (alphabet.indexOf(message[j]) + alphabet.indexOf(newKey[j])) % alphabet.length
        enCodedText = enCodedText + alphabet[symbol]
    }

    art(enCodedText)
}


function artDec(deCodedText){  
    let div2 = document.getElementById("dec")
    let p2 = document.createElement("p")
    p2.innerHTML = ("DECRYPTED TEXT: " + deCodedText)
    div2.appendChild(p2)
}


function deShifr(){
    let message = document.getElementById("ecrypt").value
    let key = document.getElementById('key').value 

    dencryption(alphabet,message, key)
}

function dencryption(alphabet, message, key){
    let deCodedText = ""

    let newKeyDec = setKeyLen(message, key)
    for(let i= 0; i < message.length; i++){
        let symbol1 = (alphabet.indexOf(message[i]) - alphabet.indexOf(newKeyDec[i]) + alphabet.length) % alphabet.length
        deCodedText = deCodedText + alphabet[symbol1]
    }

    artDec(deCodedText)
}

