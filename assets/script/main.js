const currentDate = new Date();
const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const currentTime = currentDate.getTime();
const currentDay = weekDay[currentDate.getDay()];

const time = document.querySelector("#currentUTCTime");
const dayOfTheWeek = document.querySelector("#currentDayOfTheWeek");
time.innerHTML = currentTime;
dayOfTheWeek.innerHTML = currentDay;