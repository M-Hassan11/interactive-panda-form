let usernameRef = document.getElementById("username")

let passwordRef = document.getElementById("password")
let submitButton = document.getElementById("submitBtn")

let eyeLeft = document.querySelector(".eyeball-left")
let eyeRight = document.querySelector(".eyeball-right")

let handLeft = document.querySelector(".hand-left")
let handRight = document.querySelector(".hand-right")

let normalEyesStyle = () => {
    eyeLeft.style.cssText = `left: 0.6em;
    top: 0.6em;
    `;
    eyeRight.style.cssText = `
    right:0.6em;
    top:0.6em;
    `;
}

let normalHandStyle = () => {
    handLeft.style.cssText = `
    height: 2.81em;
    top:8.4em;
    left:7.5em;
    transform: rotate(0deg);
    `;
    handRight.style.cssText = `
    height: 2.81em;
    top:8.4em;
    right:7.5em;
    transform: rotate(0deg);
    `
}

usernameRef.addEventListener("focus", () => {
    eyeLeft.style.cssText = `
    left: 0.75em;
    top: 1.12em;
    `;
    eyeRight.style.cssText = `
    right:0.75em;
    top: 1.12em;
    `;
    normalHandStyle()
    
})
passwordRef.addEventListener("focus", () => {
    handLeft.style.cssText = `
    height: 6.56em;
    top:3.87em;
    left: 11.75em;
    transform: rotate(-155deg)
    `;
    handRight.style.cssText = `
    height: 6.56em;
    top:3.87em;
    right: 11.75em;
    transform: rotate(155deg);
    `;
    normalEyesStyle()
})

document.addEventListener("click", (e) => {
    let clickedSide = e.target;
    if(clickedSide != usernameRef && clickedSide != passwordRef) {
        normalEyesStyle()
        normalHandStyle()
    }
})// script.js
document.getElementById('myForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting the default way
    event.preventDefault();

    // Get the values from the inputs
    const input1Value = usernameRef.value;
    const input2Value = passwordRef.value;

    // Create an object to log
    const data = {
        usernameRef: input1Value,
        passwordRef: input2Value
    };

    // Log the data to the console
    console.log('Form Data:', data);
    const input1ValueClr = usernameRef.value = '';
    const input2ValueClr = passwordRef.value = '';
});
