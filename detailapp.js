//functions
function changeColor(swatchcolor, swatchid, newColor) {
swatchcolor.style.backgroundColor = newColor;
swatchid.textContent = newColor;
}

function newRandomColor() {
var newRed = Math.round(255 * Math.random()).toString(16)
var newGreen = Math.round(255 * Math.random()).toString(16)
var newBlue = Math.round(255 * Math.random()).toString(16)

var newColor = "#" + pad(newRed) + pad(newGreen) + pad(newBlue);

return newColor
}

function pad(n) {
return (n.length < 2) ? "0" + n : n;
}

//document objects
//swatch
var swatchonecolor = document.querySelector('#swatchonecolor'),
swatchoneid = document.querySelector('#swatchoneid');

//buttons
var randomColor = document.querySelector('#randombutton'),
    redButton = document.querySelector('#redbutton'),
    orangeButton = document.querySelector('#orangebutton'),
    yellowButton = document.querySelector('#yellowbutton'),
    greenButton = document.querySelector('#greenbutton'),
    blueButton = document.querySelector('#bluebutton'),
    purpleButton = document.querySelector('#purplebutton'),
    brownButton = document.querySelector('#brownbutton'),
    grayButton = document.querySelector('#graybutton'),
    backButton = document.querySelector('#backbutton');


//event listners
randomColor.addEventListener('click', function () {
let curUrl = window.location.href;
let mainPage = curUrl.split('/')[0];
let color = newRandomColor();
window.location.href = mainPage + '/detail.html?color=' + color;
let newUrl = window.location.href;
let colorCode = newUrl.split('=')[1]
changeColor(swatchonecolor, swatchoneid, colorCode);
}, false);

redButton.addEventListener('click', function () {
let curUrl = window.location.href;
let mainPage = curUrl.split('/')[0];
let color = red;
window.location.href = mainPage + '/detail.html?color=' + color;
let newUrl = window.location.href;
let colorCode = newUrl.split('=')[1]
changeColor(swatchonecolor, swatchoneid, colorCode);
}, false);

orangeButton.addEventListener('click', function () {
let curUrl = window.location.href;
let mainPage = curUrl.split('/')[0];
let color = orange;
window.location.href = mainPage + '/detail.html?color=' + color;
let newUrl = window.location.href;
let colorCode = newUrl.split('=')[1]
changeColor(swatchonecolor, swatchoneid, colorCode);
}, false);

yellowButton.addEventListener('click', function () {
let curUrl = window.location.href;
let mainPage = curUrl.split('/')[0];
let color = yellow;
window.location.href = mainPage + '/detail.html?color=' + color;
let newUrl = window.location.href;
let colorCode = newUrl.split('=')[1]
changeColor(swatchonecolor, swatchoneid, colorCode);
}, false);

greenButton.addEventListener('click', function () {
let curUrl = window.location.href;
let mainPage = curUrl.split('/')[0];
let color = green;
window.location.href = mainPage + '/detail.html?color=' + color;
let newUrl = window.location.href;
let colorCode = newUrl.split('=')[1]
changeColor(swatchonecolor, swatchoneid, colorCode);
}, false);

blueButton.addEventListener('click', function () {
let curUrl = window.location.href;
let mainPage = curUrl.split('/')[0];
let color = blue;
window.location.href = mainPage + '/detail.html?color=' + color;
let newUrl = window.location.href;
let colorCode = newUrl.split('=')[1]
changeColor(swatchonecolor, swatchoneid, colorCode);
}, false);

purpleButton.addEventListener('click', function () {
let curUrl = window.location.href;
let mainPage = curUrl.split('/')[0];
let color = purple;
window.location.href = mainPage + '/detail.html?color=' + color;
let newUrl = window.location.href;
let colorCode = newUrl.split('=')[1]
changeColor(swatchonecolor, swatchoneid, colorCode);
}, false);

brownButton.addEventListener('click', function () {
let curUrl = window.location.href;
let mainPage = curUrl.split('/')[0];
let color = brown;
window.location.href = mainPage + '/detail.html?color=' + color;
let newUrl = window.location.href;
let colorCode = newUrl.split('=')[1]
changeColor(swatchonecolor, swatchoneid, colorCode);
}, false);

grayButton.addEventListener('click', function () {
let curUrl = window.location.href;
let mainPage = curUrl.split('/')[0];
let color = gray;
window.location.href = mainPage + '/detail.html?color=' + color;
let newUrl = window.location.href;
let colorCode = newUrl.split('=')[1]
changeColor(swatchonecolor, swatchoneid, colorCode);
}, false);

backButton.addEventListener('click', function () {
    let curUrl = window.location.href;
    let mainPage = curUrl.split('/')[0];
    window.location.href = mainPage + '/list.html';
}, false);



//initialize page
let url = window.location.href;
let colorCode = url.split('=')[1]
changeColor(swatchonecolor, swatchoneid, colorCode);

var red = '#ff0000',
    orange = '#ff8000',
    yellow = '#ffff00',
    green = '#00ff00',
    blue = '#0000ff',
    purple = '#8000ff',
    brown = '#a52a2a',
    gray = '#808080';
    //preset colors