"use strict";
window.onload = function() {
    let options = "";
    Object.keys(ANIMATIONS).forEach((key) => {
        options += `<option value="${key}">${key}</option>`;
    });

    document.getElementById("animation-select").innerHTML = options;
    document.getElementById("btn-start").disabled = true;
    document.getElementById("btn-stop").disabled = true;

    onFontClick();
}

let currentAnimation;
const onAnimationClick  = () => {
    currentAnimation = document.getElementById("animation-select").value;
    if (currentAnimation != "" && !animating) document.getElementById("btn-start").disabled = false;
}

const onFontClick = () => {
    const size = document.getElementById("size-select").value;
    document.getElementById("input").style.fontSize = size;
}

var delay = 250;
const onTurboChecked = () => {
    const checkBox = document.getElementById("turbo");
    delay = checkBox.checked ? 50 : 250;
    if (animation) {
        clearInterval(animation);
        onAnimationStart();
    }
}

let animation;
var animating = false;
const onAnimationStart = () => {
    if (currentAnimation) {
        const animArray = ANIMATIONS[currentAnimation].split("=====\n");
        let currentFrame = 0;
        animation = setInterval(() => {
            document.getElementById("input").innerHTML = animArray[currentFrame];
            currentFrame = (currentFrame === animArray.length - 1) ? 0 : currentFrame + 1;
        }, delay);
        document.getElementById("btn-start").disabled = true;
        document.getElementById("btn-stop").disabled = false;
        animating = true;
    }
}

const onAnimationStop = () => {
    if (animation) {
        clearInterval(animation);
        document.getElementById("btn-start").disabled = false;
        document.getElementById("btn-stop").disabled = true;
        animating = false;
    }
}