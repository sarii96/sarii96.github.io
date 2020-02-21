let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

//------------------------------------------------------


const imgOption = {
    threshold: 9,
    rootMargin: "0px 0px 50px 0px"
};


if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

//-----------------------------------------------------




imagesToLoad.forEach((img) => {
    loadImages(img);
  });



  WebFont.load({
    google: {
        families: [
            'Anton',
            'Roboto'
        ]
    }
});



let pday = new Date();
let aside = document.querySelector('aside');
if (pday.getDay() === 5) {
    aside.style.display = "block";
}
else {
    aside.style.display = "none";
}



const hamButton = document.querySelector("#ham");

hamButton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("responsive");
}

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