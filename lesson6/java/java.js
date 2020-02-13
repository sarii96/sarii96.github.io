let currentDate = new Date();

let year = currentDate.getFullYear();


let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August', 
    'September',
    'October',
    'November',
    'December'
];
let daysofweek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

let dayofweek = currentDate.getDay();


let numberday = currentDate.getDate();

let fullDate = daysofweek[dayofweek];

console.log(fullDate); //Thursday

fullDate += ", " + numberday + " " + months[currentDate.getMonth()] + " " + year;

document.querySelector('#current-date').textContent = fullDate;


// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
document.getElementById("current-temp").innerHTML= "22&deg;F";
document.getElementById("wind-speed").innerHTML= "5 mph";
// document.getElementById("humidity").innerHTML= "93%";





// -------------------------------------------------------------------------
// -------------------------------------------------------------------------


const hamButton = document.querySelector("#ham");

hamButton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("responsive");
}

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

let pday = new Date();
let aside = document.querySelector('aside');
if (pday.getDay() === 5) {
    aside.style.display = "block";
}
else {
    aside.style.display = "none";
}

//-------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
let f, t, s;
t = 50;
s = 10;

if (t <= 50 && s >=3) {
    f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275  * t * Math.pow(s, 0.16);
    
}
else{
    f = 'N/A';
    document.querySelector('#wind-chill').innerHTML = f;
}

document.querySelector('#current-temp').innerHTML =  `${t}&deg;`;
document.querySelector('#wind-speed').innerHTML = s + 'mph';
document.querySelector('#wind-chill').innerHTML = f.toFixed(0) +'&deg;';
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
WebFont.load({
    google: {
        families: [
            'Anton',
            'Roboto'
        ]
    }
});