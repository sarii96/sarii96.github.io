const currentDate = New Date();
console.log(currentDate);

const currentYear = currentDate.getFuLYear();
console.log(currentYear);

document.getElementById("currentYear").innerHTML =  currentYear;