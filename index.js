setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-date-hour]');
const minuteHand = document.querySelector('[data-date-minute]');
const secondHand = document.querySelector('[data-date-second]');
// console.log(secondHand)

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    // console.log(currentDate);
    // console.log(secondsRatio);
    // console.log(minutesRatio)
    // console.log(hoursRatio);

    setRotation(hourHand,hoursRatio);
    setRotation(minuteHand,minutesRatio);
    setRotation(secondHand,secondsRatio);
}

function setRotation(element,rotationRatio){
    // console.log(element)
    element.style.setProperty('--rotation', rotationRatio * 360 +'deg')
}

setClock();
