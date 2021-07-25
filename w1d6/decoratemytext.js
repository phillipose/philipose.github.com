"use strict";
window.onload = function() {
}
const incrementFont = i => {
    const textArea = document.getElementById('text');
    const currentSize = parseInt(window.getComputedStyle(textArea).fontSize);

    textArea.style.fontSize =  currentSize > 50 ? '13pt' : currentSize + i + 'pt';
}

const startIncrement = () => {
    setInterval(() => {
        incrementFont(2);
    }, 500);
}

const bold = () => {
    const textArea = document.getElementById('text');
    const checkbox = document.getElementById('checkbox');
    const body = document.body;
    if (checkbox.checked) {
        textArea.style.fontWeight = 'bold';
        textArea.style.color = 'green';
        textArea.style.textDecoration = 'underline';
        body.style.backgroundImage = "url('../assets/img/dollarbill.png')";
    } else {
        textArea.style.fontWeight = 'normal';
        textArea.style.color = 'black';
        textArea.style.textDecoration = 'none';
        body.style.backgroundImage = "none";
    }
}

// checks if character is vowel
const isVowel = char => {
    return /[aeiou]/i.test(char);
}

const isConsonant = char => {
    return !isVowel(char) && /[a-zA-Z]/i.test(char);
}

const pigLatin = () => {
    const textArea = document.getElementById('text');
    const content = textArea.value;

    const arr = content.split(" ");
    for(let i = 0; i < arr.length;i++) {
        const firstElement = arr[i][0];
        if (firstElement && isVowel(firstElement)) {
            arr[i] = arr[i] + 'ay';
        } else if(firstElement && isConsonant(firstElement)) {
            arr[i] = arr[i].substring(1, arr[i].length) + arr[0] + 'ay';
        }
    }
    textArea.value = arr.join(" ");
}

const malkovitch = () => {
    const textArea = document.getElementById('text');
    const content = textArea.value;

    const arr = content.split(" ");
    for(let i = 0; i < arr.length;i++) {
        const firstElement = arr[i];
        if (firstElement && firstElement.length > 5) {
            arr[i] = 'Malkovitch';
        }
    }
    textArea.value = arr.join(" ");
}