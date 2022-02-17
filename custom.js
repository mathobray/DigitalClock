setInterval(() => {
    const time = document.querySelector("#time");
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let second = date.getSeconds();
let day_night = "AM";
if(hours > 12){
    day_night = "PM"
    hours = hours - 12;
}
if(hours < 10){
    hours = "0" + hours;
}
if(minutes < 10){
    minutes = "0" + minutes;
}
if(second < 10){
    second = "0" + second;
}
time.textContent = hours + ":" + minutes + ":" + second + ":" + day_night;
});