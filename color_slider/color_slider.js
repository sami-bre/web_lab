// let's get the slider and the colorDisplay and the header
let slider = document.querySelector('#colorSlider');
let colorDisplay = document.querySelector('#colorDisplay');
let header = document.querySelector('#header');

// let's define the callback for when the slider is moved
function changeColor() {
    colorDisplay.style.backgroundColor = `hsl(${slider.value}, 80%, 80%)`;
    header.style.textShadow = `-8px 8px hsl(${slider.value}, 30%, 30%)`
}

// let's bind the slider with the callback
slider.addEventListener("input", changeColor);

// finally, when the page loads, get the slider value and set the display color
// to synchronize the slider and the color at first
let hue = slider.value;
colorDisplay.style.backgroundColor = `hsl(${hue}, 80%, 80%)`
header.style.textShadow = `-8px 8px hsl(${hue}, 30%, 30%)`
