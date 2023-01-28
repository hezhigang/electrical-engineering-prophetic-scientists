let navOpen = false;

function ToggleNav() {
    if (!navOpen) { // opens side nav
        $('#mobileNav').attr('style', 'display: inline;');
        $('#mobileNav').animate(
            {
                right: 0
            }, 420, 'swing');
    }
    else { // close the side nav
        $('#mobileNav').animate(
            {
                right: -300
            }, 420, 'swing').attr('style', 'display: inline;')
    }
    navOpen = !navOpen;
}

let date = new Date();
let curDay = date.getDay();
let curDayOfMonth = date.getDate();
let curMonth = date.getMonth();
let curYear = date.getFullYear();
const DAYS_OF_THE_WEEK = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];
let ymdwSpan = document.querySelector('#ymdwSpan');
ymdwSpan.innerHTML = DAYS_OF_THE_WEEK[curDay] + ', '+ curYear + '-' + (curMonth + 1).toString().padStart(2, '0') + '-' + curDayOfMonth.toString().padStart(2, '0');

let mainBody = document.querySelector('main > section');

let colors = [
    { fromColor: '#4286f4', toColor: '#373B44' },
    { fromColor: '#2F80ED', toColor: '#56CCF2' },
    { fromColor: '#8f94fb', toColor: '#4e54c8' },
    { fromColor: '#1565C0', toColor: '#b92b27' },
    { fromColor: '#0f3443', toColor: '#34e89e' },
    { fromColor: '#F45C43', toColor: '#EB3349' },
    { fromColor: '#ff5e62', toColor: '#ff9966' }
];
let theColor = colors[Math.floor((Math.random() * colors.length))];
let strCSS = ' background: ' + theColor.toColor + ';';
strCSS += ' background: linear-gradient(to right bottom, ' + theColor.fromColor + ', ' + theColor.toColor + ');';
mainBody.setAttribute('style', strCSS);

const params = new URLSearchParams(window.location.search);
let pageKey = params.get('p');
let quotes = {
    'home': [
        'Telegraph engineering or electrical engineering is a new profession.',
        'Computer science is neither mathematics nor electrical engineering.',
        'Innovation is everything.',
        'Electrical Engineering is the largest branch of engineering, ...'
    ],
    'faraday': [
        'But still try, for who knows what is possible...',
        'Nothing is too wonderful to be true, if it be consistent with the laws of nature',
        'I shall be with Christ, and that is enough.'
    ],
    'maxwell': [
        'It is of great advantage to the student of any subject to read the original memoirs on that subject',
        'we can scarcely avoid the conclusion that light consists in the transverse undulations of the same medium which is the cause of electric and magnetic phenomena.',
        'The equations at which we arrive must be such that a person of any nation, by substituting the numerical values of the quantities as measured by his own national units, would obtain a true result.',
        'Let there be light'
    ],
    'fiveSaints': [
        'If Universities do not study useless subjects, who will?',
        'Death is not extinction. ',
        'Life must be considered sui generis; it is not a form of energy, nor can it be expressed in terms of something else.',
        'We do not dwell in the Palace of Truth.',
        'Rigorous Mathematics is Narrow, Physical Mathematics Bold And Broad.',
        'Shall I refuse my dinner because I do not fully understand the process of digestion?',
        'we just have these mysterious electromagnetic waves that we cannot see with the naked eye. But they are there.',
        'the theory was found to be confirmed by the experiments...',
        'how is that portions of matter can interact on each other which seem to have no means of connexion between them. Can a body act where it is not?'
    ]
};

if (pageKey==null || pageKey=='') {
    pageKey = 'home';
}
let theQuotes = quotes[pageKey];
let newQuote = theQuotes[Math.floor((Math.random() * theQuotes.length))];
let header = document.querySelector('header');
let newSpan = document.createElement('span');
newSpan.innerText = newQuote;
header.appendChild(newSpan);

//-------------------------------------------------------------------//
//--------------------> REQUEST ANIMATION FRAME <--------------------//
(function () {
    let requestAnimationFrame = window.requestAnimationFrame
        || window.mozRequestAnimationFrame
        || window.webkitRequestAnimationFrame
        || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

// star twinkling effect

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let canvasWidth = canvas.width = document.body.clientWidth;
let canvasHeight = canvas.height = document.body.clientHeight;
// console.log("canvasWidth=" + canvasWidth + ", " + canvasHeight);

function randomColor() {
    let arrColors = ["ffffff", "ffecd3", "bfcfff"];
    return "#" + arrColors[Math.floor((Math.random() * 3))];
}

let arrStars = [];
for (let i = 0; i < 400; i++) {
    let randX = Math.floor((Math.random() * canvasWidth) + 1);
    let randY = Math.floor((Math.random() * canvasHeight) + 1);
    let randR = Math.random() * 1.7 + .5;

    let star = new Star(randX, randY, randR, randomColor());
    arrStars.push(star);
}

function Clear() {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
}

function Twinkle() {
    for (let i = 0; i < arrStars.length; i++) {
        arrStars[i].Twinkle();
    }
}

function Draw() {
    for (let i = 0; i < arrStars.length; i++) {
        arrStars[i].Draw();
    }
}

function Update() {
    Clear();
    Twinkle();
    Draw();
    requestAnimationFrame(Update);
}

//------------------------------------------------------------------//
//--------------------> ONLOAD EVENT LISTENER <---------------------//
window.addEventListener("load", function () {
    Update();
});