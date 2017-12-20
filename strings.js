// STRING MANIPULATION

let textInput = document.getElementById("text-input");
let btn = document.getElementById("button");
let body = document.getElementById("body");
let outputDiv = document.getElementById("outputDiv");

btn.addEventListener("click", () => {
    outputDiv.innerHTML = "";
    testString = textInput.value;
    
    if (testString.match(/\d/) === null) { 
        alphabits(testString);
        palindrome(testString);
        textInput.value = "";
    } else {
        alert("No numbers allowed!");
        textInput.value = "";
        textInput.focus();
    }
    
});

textInput.addEventListener("keypress", () => {
    testString = textInput.value;
    if (event.keyCode === 13) {
        outputDiv.innerHTML = "";
        if (testString.match(/\d/) === null) { 
            alphabits(testString);
            palindrome(testString);
            textInput.value = "";
        } else {
        alert("No digits allowed!");
        textInput.value = "";
        textInput.focus();
        }
    } 
});

function reversal(stringInput) {
    // let string = stringInput.replace(" ", "");
    let stringArray = stringInput.split("");
    let stringRev = stringArray.reverse();
    let stringRevJoin = stringRev.join("");
    printToDom("Reversal: ", stringRevJoin.toUpperCase());
    return stringRevJoin;
}

function alphabits(stringInput) {
    let string = stringInput.replace(/\s/g, "").toLowerCase();
    let stringArray = string.split("");
    let stringAlpha = stringArray.sort();
    stringAlpha = stringAlpha.join(" ").toUpperCase();
    printToDom("Alphabetize: ", stringAlpha);

}

function palindrome(testString) {
    let stringCheck = testString.replace(/\s/g, "").toLowerCase();
    let stringRev = reversal(stringCheck);
    if (stringCheck === stringRev) {
        printToDom("Palindrome Check: ", "Palindrome!");
    } else {
        printToDom("Palindrome Check: ", "Not a Palindrome!");
    }
}

function printToDom (funcType, string) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `<h2>${funcType}</h2>
        <h3>${string}</h3>`;
    outputDiv.appendChild(newDiv);
}



var testString = "";
