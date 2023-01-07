"use strict";
const h1 = document.querySelector("h1");
// * Handle copy the Hexadecimal color values
h1.addEventListener("click", () => {
    try {
        navigator.clipboard.writeText(h1.innerText);
        h1.style.fontWeight = "normal";
    }
    catch (error) {
        alert(error);
    }
});
// * Handle Random Color function
const handleRandomColor = () => {
    // * Initialize the RGB colors
    let r = Math.round(Math.random() * 225);
    let g = Math.round(Math.random() * 225);
    let b = Math.round(Math.random() * 225);
    // * Convert the RGB color to Hexadecimal color
    function RGBToHex(r, g, b) {
        return valueToHex(r) + valueToHex(g) + valueToHex(b);
    }
    // * COnvert the number to a hexadecimal
    function valueToHex(c) {
        return c.toString(16);
    }
    let color = RGBToHex(r, g, b);
    h1.innerText = `#${color}`;
    h1.title = "Copy";
    h1.style.fontWeight = "bold";
    document.body.style.backgroundColor = `#${color}`;
};
// * Load the Function by loading
document.addEventListener("DOMContentLoaded", () => {
    handleRandomColor();
});
// * Load the Function by Clinking button
function handleClick() {
    handleRandomColor();
}
