function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    var AM = isAM(h);
    var greeting = getGreeting(h);

    h = checkTime(h, true);
    m = checkTime(m, false);
    s = checkTime(s, false);

    var currentTime = "The current time is";

    document.getElementById('txtGreeting').innerHTML = greeting;
    document.getElementById('txtCurrentTime').innerHTML = currentTime;
    document.getElementById('txtClock').innerHTML = h + ":" + m + ":" + s + " " + AM;
    var t = setTimeout(startTime, 500);
}

function isAM(h) {
    if (h < 12) {
        return "AM";
    }
    else {
        return "PM";
    }
}

function getGreeting(h) {
    var greeting;
    if (h < 11) {
        greeting = "Good morning, and welcome to SmartlingHotels";
    }
    if (h >= 11 && h <= 16) {
        greeting = "Good afternoon, and welcome to SmartlingHotels.";
    }
    if (h > 16) {
        greeting = "Good evening, and welcome to SmartlingHotels.";
    }
    return greeting;
}

function checkTime(i, isHours) {
    if (isHours) {
        if (i < 1)
            return 12;
        if (i >= 1 && i <= 12)
            return i;
        if (i > 12)
            return i % 12;
    }
    else {
        if (i < 10) {
            i = "0" + i;
        }  // add zero in front of numbers < 10
        return i;
    }
}
