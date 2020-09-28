window.onload = window.setTimeout(showImage(), 5000)

function showImage() {
    var img = document.createElement("img")
    img.src = "michael-retard.jpg"
    document.body.appendChild(img)
}
function timer() {
    counter = 15;
    var timer = setInterval(function () {
      if(counter === 0) return clearInterval(timer);
      txt.value = counter + " seconds";
      counter--;
    }, 1000);
 }

function convert() {
    var output = document.getElementById("textareaoutput");
    var input = document.getElementById("textareainput").value;

    var inputType = document.getElementById("input-type").value
    var outputType = document.getElementById("output-type").value
    output.value = ""
    if (inputType == "text") {
        if (outputType == "text") {
            output.value = input
        }
        else if (outputType == "binary") {
            output.value = textToBinary(input)
        }
        else if (outputType == "hexadecimal") {
            output.value = textToHexadecimal(input)
        }
        else if (outputType == "octal") {
            output.value = textToOctal(input)
        }
        else if (outputType == "integer") {
            output.value = textToInteger(input)
        }
    }
    else if (inputType == "binary") {
        if (outputType == "text") {
            output.value = binaryToText(input)
        }
        else if (outputType == "binary") {
            output.value = hexadecimalToBinary(binaryToHexadecimal(input))
        }
        else if (outputType == "hexadecimal") {
            output.value = binaryToHexadecimal(input)
        }
        else if (outputType == "octal") {
            output.value = binaryToOctal(input)
        }
        else if (outputType == "integer") {
            output.value = binaryToInteger(input)
        }
    }
    else if (inputType == "hexadecimal") {
        if (outputType == "text") {
            output.value = hexadecimalToText(input)
        }
        else if (outputType == "binary") {
            output.value = hexadecimalToBinary(input)
        }
        else if (outputType == "hexadecimal") {
            output.value = binaryToHexadecimal(hexadecimalToBinary(input))
        }
        else if (outputType == "octal") {
            output.value = hexadecimalToOctal(input)
        }
        else if (outputType == "integer") {
            output.value = hexadecimalToInteger(input)
        }
    }
    else if (inputType == "integer") {
        if (outputType == "text") {
            output.value = integerToText(input)
        }
        else if (outputType == "binary") {
            output.value = integerToBinary(input)
        }
        else if (outputType == "hexadecimal") {
            output.value = integerToHexadecimal(input)
        }
        else if (outputType == "octal") {
            output.value = integerToOctal(input)
        }
        else if (outputType == "integer") {
            output.value = binaryToInteger(integerToBinary(input))
        }
    }
    else if (inputType == "octal") {
        if (outputType == "text") {
            output.value = octalToText(input)
        }
        else if (outputType == "binary") {
            output.value = octalToBinary(input)
        }
        else if (outputType == "hexadecimal") {
            output.value = octalToHexadecimal(input)
        }
        else if (outputType == "octal") {
            output.value = binaryToOctal(octalToBinary(input))
        }
        else if (outputType == "integer") {
            output.value = octalToInteger(input)
        }
    }
    if (output.value.includes("NaN")) {
        output.value = ""
    }
}

function textToBinary(text) {
    return text.split("").map(letter => letter.charCodeAt(0).toString(2)).join(" ")
}
function binaryToText(binary) {
    return binary.split(" ").map(bin => String.fromCharCode(parseInt(bin, 2))).join("")
}
function textToHexadecimal(text) {
    return text.split("").map(letter => letter.charCodeAt(0).toString(16)).join(" ")
}
function hexadecimalToText(hexadecimal) {
    return hexadecimal.split(" ").map(hex => String.fromCharCode(parseInt(hex, 16))).join("")
}
function textToInteger(text) {
    return text.split("").map(letter => letter.charCodeAt(0).toString(10)).join(" ")
}
function integerToText(integer) {
    return integer.split(" ").map(int => String.fromCharCode(parseInt(int, 10))).join("")
}
function binaryToHexadecimal(binary) {
    return binary.split(" ").map(bin => BigInt("0b" + bin).toString(16)).join(" ")
}
function binaryToInteger(binary) {
    return binary.split(" ").map(bin => BigInt("0b" + bin).toString(10)).join(" ")
}
function hexadecimalToBinary(hexadecimal) {
    return hexadecimal.split(" ").map(hex => BigInt("0x" + hex).toString(2)).join(" ")
}
function hexadecimalToInteger(hexadecimal) {
    return hexadecimal.split(" ").map(hex => BigInt("0x" + hex).toString(10)).join(" ")
}
function integerToBinary(integer) {
    return integer.split(" ").map(int => BigInt(int).toString(2)).join(" ")
}
function integerToHexadecimal(integer) {
    return integer.split(" ").map(int => BigInt(int).toString(16)).join(" ")
}
function textToOctal(text) {
    return text.split("").map(letter => letter.charCodeAt(0).toString(8)).join(" ")
}
function octalToText(octal) {
    return octal.split(" ").map(oct => String.fromCharCode(parseInt(oct, 8))).join("")
}
function octalToBinary(octal) {
    return octal.split(" ").map(oct => BigInt("0o" + oct).toString(2)).join(" ")
}
function octalToHexadecimal(octal) {
    return octal.split(" ").map(oct => BigInt("0o" + oct).toString(16)).join(" ")
}
function octalToInteger(octal) {
    return octal.split(" ").map(oct => BigInt("0o" + oct).toString(10)).join(" ")
}
function binaryToOctal(binary) {
    return binary.split(" ").map(bin => BigInt("0b" + bin).toString(8)).join(" ")
}
function hexadecimalToOctal(hexadecimal) {
    return hexadecimal.split(" ").map(hex => BigInt("0x" + hex).toString(8)).join(" ")
}
function integerToOctal(integer) {
    return integer.split(" ").map(int => BigInt(int).toString(8)).join(" ")
}