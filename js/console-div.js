if (navigator.userAgent.includes('Mobi')) {
    var console = {};
    var logger = document.getElementById("logger");
    console.log = text => {
        let element = document.createElement("div");
        let txt = document.createTextNode(text);

        element.appendChild(txt);
        logger.appendChild(element);
    }
    console.clear = () => logger.innerHTML = '';
}