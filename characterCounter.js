
function characterCounter(){

let outputfield = document.querySelector("#text");

var charcount = inputField.value.length;

outputfield.textContent = `Characters : ${charcount}`;

if (!inputField || !outputfield) {
    console.error("Input field or output field not found");
    return;
}
}
