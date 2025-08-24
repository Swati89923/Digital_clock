const clock = document.getElementById('clock');

setInterval(function () {
    let date = new Date();
    let time = date.toLocaleTimeString();
    let day = date.toLocaleDateString(undefined, { weekday: 'long' });
    let fullDate = date.toLocaleDateString();

    // Show date + day + time
    clock.innerHTML = `${day}, ${fullDate} <br> ${time}`;
}, 1000);
