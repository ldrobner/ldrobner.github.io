var colors = ['#ff0000', '#ff8000', '#ffff00', '#80ff00', '#00ff00', '#00ff80', '#00ffff', '#0080ff', '#0000ff', '#8000ff', '#ff00ff', '#ff0080',
              '#f899bc', '#10ff03', '#78bc72', '#df28eb', '#8ef557', '#15d5f2', '#ad3b91', '#dbe175', '#eadf28', '#f0dc62', '#8ae0ea', '#c146d3',
              '#27648d', '#3a45da', '#4502a3', '#6de973', '#c9cec2', '#58418d', '#1abe69', '#adfddf', '#185bcf', '#97044c', '#149ea6', '#a3ab84',
              '#ddf6b6', '#f1f4c1', '#2065c7', '#2cd72e', '#169d9d', '#276d61', '#f39d9e', '#1883f8', '#a8fd2e', '#937c29', '#057e95', '#224550',
              '#08c527', '#cdd5ab', '#8207a3', '#a88892', '#c64fb0', '#649a74', '#14dbb7', '#600789', '#230993', '#94d20f', '#709ba7', '#2a7a31',
              '#9606c3', '#2009b4', '#469894', '#81c205', '#ade96d', '#3fe525', '#c416ee', '#d6de17', '#f067f8', '#770480', '#766b1d', '#0082e0',
              '#afbd88', '#68b91f', '#e78f66', '#1d758e', '#8de97c', '#054504', '#cbefa3', '#2b831c', '#1f90ec', '#624939', '#e7ba5e', '#eee013',
              '#835d32', '#cfefe1', '#d8c59a', '#dd184e', '#c02921', '#8f7898', '#c2adf9', '#ef7925', '#fdec5a', '#617235', '#7f915a', '#b63f81',
              '#ae4d8d', '#6b620c', '#1d55d0', '#3213c1', '#bb9dbc', '#e94739', '#ee1b69', '#5e0031', '#03bcc8', '#0818d2', '#7343ae', '#7cf12d']
              //108 colors, 9 pages

var red = '#ff0000',
    orange = '#ff8000',
    yellow = '#ffff00',
    green = '#00ff00',
    blue = '#0000ff',
    purple = '#8000ff',
    brown = '#a52a2a',
    gray = '#808080';
    //preset colors


//document variables
    //swatches
var swatchonecolor = document.querySelector('#swatchonecolor'),
    swatchoneid = document.querySelector('#swatchoneid'),
    swatchtwocolor = document.querySelector('#swatchtwocolor'),
    swatchtwoid = document.querySelector('#swatchtwoid'),
    swatchthreecolor = document.querySelector('#swatchthreecolor'),
    swatchthreeid = document.querySelector('#swatchthreeid'),
    swatchfourcolor = document.querySelector('#swatchfourcolor'),
    swatchfourid = document.querySelector('#swatchfourid'),
    swatchfivecolor = document.querySelector('#swatchfivecolor'),
    swatchfiveid = document.querySelector('#swatchfiveid'),
    swatchsixcolor = document.querySelector('#swatchsixcolor'),
    swatchsixid = document.querySelector('#swatchsixid'),
    swatchsevencolor = document.querySelector('#swatchsevencolor'),
    swatchsevenid = document.querySelector('#swatchsevenid'),
    swatcheightcolor = document.querySelector('#swatcheightcolor'),
    swatcheightid = document.querySelector('#swatcheightid'),
    swatchninecolor = document.querySelector('#swatchninecolor'),
    swatchnineid = document.querySelector('#swatchnineid'),
    swatchtencolor = document.querySelector('#swatchtencolor'),
    swatchtenid = document.querySelector('#swatchtenid'),
    swatchelevencolor = document.querySelector('#swatchelevencolor'),
    swatchelevenid = document.querySelector('#swatchelevenid'),
    swatchtwelvecolor = document.querySelector('#swatchtwelvecolor'),
    swatchtwelveid = document.querySelector('#swatchtwelveid');

var swatches = document.querySelectorAll('.swatch');

    //page buttons
var pageOne = document.querySelector('#page1'),
    pageTwo = document.querySelector('#page2'),
    pageThree = document.querySelector('#page3'),
    pageFour = document.querySelector('#page4'),
    pageFive = document.querySelector('#page5'),
    pageSix = document.querySelector('#page6'),
    pageSeven = document.querySelector('#page7'),
    pageEight = document.querySelector('#page8'),
    pageNine = document.querySelector('#page9');

//buttons
var randomColor = document.querySelector('#button'),
    redButton = document.querySelector('#redbutton'),
    orangeButton = document.querySelector('#orangebutton'),
    yellowButton = document.querySelector('#yellowbutton'),
    greenButton = document.querySelector('#greenbutton'),
    blueButton = document.querySelector('#bluebutton'),
    purpleButton = document.querySelector('#purplebutton'),
    brownButton = document.querySelector('#brownbutton'),
    grayButton = document.querySelector('#graybutton');


//make lists
var swatchColorObjs = [swatchonecolor, swatchtwocolor, swatchthreecolor, swatchfourcolor, swatchfivecolor, swatchsixcolor, swatchsevencolor, swatcheightcolor, swatchninecolor, swatchtencolor, swatchelevencolor, swatchtwelvecolor];
var swatchIdObjs = [swatchoneid, swatchtwoid, swatchthreeid, swatchfourid, swatchfiveid, swatchsixid, swatchsevenid, swatcheightid, swatchnineid, swatchtenid, swatchelevenid, swatchtwelveid];
var pageButtons = [pageOne, pageTwo, pageThree, pageFour, pageFive, pageSix, pageSeven, pageEight, pageNine];

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

function changePage(pageNum) {
    for (let i = 0; i < pageButtons.length; i++) {
        if (i == pageNum - 1) {
            pageButtons[i].style.textDecoration = 'underline';
        }
        else {
            pageButtons[i].style.textDecoration = 'none';
        }
    }

    for (let j = 0; j < 12; j++) {
        changeColor(swatchColorObjs[j],swatchIdObjs[j],colors[j+12*(pageNum-1)])
    }
}

//event listeners
pageOne.addEventListener('click', function () {
    changePage(1);
}, false);

pageTwo.addEventListener('click', function () {
    changePage(2);
}, false);

pageThree.addEventListener('click', function () {
    changePage(3);
}, false);

pageFour.addEventListener('click', function () {
    changePage(4);
}, false);

pageFive.addEventListener('click', function () {
    changePage(5);
}, false);

pageSix.addEventListener('click', function () {
    changePage(6);
}, false);

pageSeven.addEventListener('click', function () {
    changePage(7);
}, false);

pageEight.addEventListener('click', function () {
    changePage(8);
}, false);

pageNine.addEventListener('click', function () {
    changePage(9);
}, false);


for (let swatch = 0; swatch < swatches.length; swatch++) {
    swatches[swatch].addEventListener('click', function () {
        let curUrl = window.location.href;
        let mainPage = curUrl.split('/')[0];
        let color = swatches[swatch].childNodes[3].innerText
        window.location.href = mainPage + '/detail.html?color=' + color;
    }, false);
}

randomColor.addEventListener('click', function () {
    let curUrl = window.location.href;
    let mainPage = curUrl.split('/')[0];
    let color = newRandomColor();
    window.location.href = mainPage + '/detail.html?color=' + color;
}, false);

redButton.addEventListener('click', function () {
    let curUrl = window.location.href;
    let mainPage = curUrl.split('/')[0];
    let color = red;
    window.location.href = mainPage + '/detail.html?color=' + color;
}, false);

orangeButton.addEventListener('click', function () {
    let curUrl = window.location.href;
    let mainPage = curUrl.split('/')[0];
    let color = orange;
    window.location.href = mainPage + '/detail.html?color=' + color;
}, false);

yellowButton.addEventListener('click', function () {
    let curUrl = window.location.href;
    let mainPage = curUrl.split('/')[0];
    let color = yellow;
    window.location.href = mainPage + '/detail.html?color=' + color;
}, false);

greenButton.addEventListener('click', function () {
    let curUrl = window.location.href;
    let mainPage = curUrl.split('/')[0];
    let color = green;
    window.location.href = mainPage + '/detail.html?color=' + color;
}, false);

blueButton.addEventListener('click', function () {
    let curUrl = window.location.href;
    let mainPage = curUrl.split('/')[0];
    let color = blue;
    window.location.href = mainPage + '/detail.html?color=' + color;
}, false);

purpleButton.addEventListener('click', function () {
    let curUrl = window.location.href;
    let mainPage = curUrl.split('/')[0];
    let color = purple;
    window.location.href = mainPage + '/detail.html?color=' + color;
}, false);

brownButton.addEventListener('click', function () {
    let curUrl = window.location.href;
    let mainPage = curUrl.split('/')[0];
    let color = brown;
    window.location.href = mainPage + '/detail.html?color=' + color;
}, false);

grayButton.addEventListener('click', function () {
    let curUrl = window.location.href;
    let mainPage = curUrl.split('/')[0];
    let color = gray;
    window.location.href = mainPage + '/detail.html?color=' + color;
}, false);


//initialize
changePage(1)