console.log('Terminal.js loaded');
console.log('Message From Creator: Im really not great at JS, so this is gonna be a mess. Sorry in advance!');

let container = document.createElement('span');
document.getElementById('consoletext').appendChild(container);

function blinkUnderscore() {
    let underscore = document.createElement('span');
    underscore.innerText = '_';
    container.appendChild(underscore);

    setInterval(() => {
        underscore.style.visibility = 'hidden';
        setTimeout(() => {
            underscore.style.visibility = 'visible';
        }, 500);
    }, 1000);
}

blinkUnderscore();

function usertypeText() {
    document.addEventListener('keydown', function(event) {
        let typedText = document.createElement('span');
        typedText.innerText = event.key;
        container.insertBefore(typedText, container.lastChild);
    });
}

usertypeText();