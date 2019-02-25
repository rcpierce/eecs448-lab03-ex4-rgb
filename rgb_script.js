function rgbChange() {
    let redBorder = document.getElementById("borderRed").value;
    let greenBorder = document.getElementById("borderGreen").value;
    let blueBorder = document.getElementById("borderBlue").value;
    let bWidth = document.getElementById("borderWidth").value;
    let bgRed = document.getElementById("bgRed").value;
    let bgGreen = document.getElementById("bgGreen").value;
    let bgBlue = document.getElementById("bgBlue").value;

    let textBlock = document.getElementById("text");

    let rgbBorder = "rgb(" + redBorder + ", " + greenBorder + ", " + blueBorder + ")";
    let rgbBg = "rgb(" + bgRed + ", " + bgGreen + ", " + bgBlue + ")";

    textBlock.style.borderColor = rgbBorder;
    textBlock.style.borderWidth = bWidth;
    textBlock.style.backgroundColot = rgbBg;
}