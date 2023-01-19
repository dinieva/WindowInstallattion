const timer = (deadline) => {
    const timerDays = document.querySelector('.count_1 > span');
    const timerHours = document.querySelector('.count_2 > span');
    const timerMinutes = document.querySelector('.count_3 > span');
    const timerSeconds = document.querySelector('.count_4 > span');

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return { timeRemaining, days, hours, minutes, seconds }
    };

    let addZero = function (num) {
        if (num < 10) {
            return '0' + num;
        }
        return num;
    };

    const updateClock = () => {
        let getTime = getTimeRemaining();
        getTime.hours = addZero(getTime.hours);
        getTime.minutes = addZero(getTime.minutes);
        getTime.seconds = addZero(getTime.seconds);
        if (getTime.timeRemaining > 0) {
            timerDays.textContent = getTime.days;
            timerHours.textContent = getTime.hours;
            timerMinutes.textContent = getTime.minutes;
            timerSeconds.textContent = getTime.seconds;
        }
    };

    setInterval(updateClock, 1000);

}

export default timer