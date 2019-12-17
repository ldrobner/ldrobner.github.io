//vars for dynamic swatch
var color = document.querySelector('.dyncolor'),
    r = document.querySelector('#r'),
    g = document.querySelector('#g'),
    b = document.querySelector('#b'),
    r_out = document.querySelector('#r_out'),
    g_out = document.querySelector('#g_out'),
    b_out = document.querySelector('#b_out'),
    hex_out = document.querySelector('#hex');

//vars for create button
var create = document.querySelector('#createButton')

function getId(id) {
    alert(id)
}


//functions for colors
function setColor() {
    var r_hex = parseInt(r.value, 10).toString(16),
        g_hex = parseInt(g.value, 10).toString(16),
        b_hex = parseInt(b.value, 10).toString(16),
        hex = "#" + pad(r_hex) + pad(g_hex) + pad(b_hex);
    color.style.backgroundColor = hex;
    hex_out.value = hex;
}

function pad(n) {
    return (n.length < 2) ? "0" + n : n;
}

function updateColor(hexcode) {
    var red = hexcode[1] + hexcode[2];
    var green = hexcode[3] + hexcode[4];
    var blue = hexcode[5] + hexcode[6];
    r.value = parseInt(red, 16);
    r_out.value = r.value;
    g.value = parseInt(green, 16);
    g_out.value = g.value;
    b.value = parseInt(blue, 16);
    b_out.value = b.value;
    color.style.backgroundColor = hexcode
    hex_out.value = hexcode
}

function newRandomColor() {
    var newRed = Math.round(255 * Math.random()).toString(16)
    var newGreen = Math.round(255 * Math.random()).toString(16)
    var newBlue = Math.round(255 * Math.random()).toString(16)

    var newColor = "#" + pad(newRed) + pad(newGreen) + pad(newBlue);

    return newColor
}
//functions new buttons
function newColorButton() {
    var newButton = document.createElement("button");
    var newColor = newRandomColor();
    var newText = document.createTextNode(newColor);
    var newHeader = document.createElement("h2");

    newButton.appendChild(newHeader).appendChild(newText);
    newButton.className = "static-swatch"
    newButton.id = newColor
    newButton.onclick = function () { updateColor(newButton.id) }
    newButton.style.backgroundColor = newColor;

    var createButton = document.getElementById("createButton")
    document.body.insertBefore(newButton,createButton)
}

function createColorButton(hexcode) {
    var newButton = document.createElement("button");
    var color = hexcode;
    var newText = document.createTextNode(hexcode);
    var newHeader = document.createElement("h2");

    newButton.appendChild(newHeader).appendChild(newText);
    newButton.className = "static-swatch"
    newButton.id = color
    newButton.onclick = function () { updateColor(newButton.id) }
    newButton.style.backgroundColor = color;

    var createButton = document.getElementById("createButton");
    document.body.insertBefore(newButton, createButton);

}


//event listeners
r.addEventListener('change', function () {
    setColor();
    r_out.value = r.value;
}, false);

r.addEventListener('input', function () {
    setColor();
    r_out.value = r.value;
}, false);

g.addEventListener('change', function () {
    setColor();
    g_out.value = g.value;
}, false);

g.addEventListener('input', function () {
    setColor();
    g_out.value = g.value;
}, false);

b.addEventListener('change', function () {
    setColor();
    b_out.value = b.value;
}, false);

b.addEventListener('input', function () {
    setColor();
    b_out.value = b.value;
}, false);

create.addEventListener('click', function () {
    newColorButton()
}, false);



//initialize page
createColorButton('#ff0000')
createColorButton('#ff8000')
createColorButton('#ffff00')
createColorButton('#80ff00')
createColorButton('#00ff00')
createColorButton('#00ff80')
createColorButton('#00ffff')
createColorButton('#0080ff')
createColorButton('#0000ff')
createColorButton('#8000ff')
createColorButton('#ff00ff')
createColorButton('#ff0080')