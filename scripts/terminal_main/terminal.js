function blinkUnderscore() {
    let underscore = document.createElement('span');
    underscore.innerText = '_';
    document.getElementById('consoletext').appendChild(underscore);

    setInterval(() => {
        underscore.style.visibility = 'hidden';
        setTimeout(() => {
            underscore.style.visibility = 'visible';
        }, 500);
    }, 1000);
}

blinkUnderscore();