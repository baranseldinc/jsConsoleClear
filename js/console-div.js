
let console = {};


// Getting div to insert logs
let logger = document.getElementById("logger");

// Adding log method from our console object
console.log = text => {
    let element = document.createElement("div");
    let txt = document.createTextNode(text);

    element.appendChild(txt);
    logger.appendChild(element);
}
console.clear = () => logger.innerHTML = '';