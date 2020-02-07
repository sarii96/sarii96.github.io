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
document.getElementById("humidity").innerHTML= "93%";





// -------------------------------------------------------------------------
// -------------------------------------------------------------------------


const hamButton = document.querySelector("#ham");

hamButton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("responsive");
}

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

