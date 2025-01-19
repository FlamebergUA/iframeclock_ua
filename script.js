document.addEventListener("DOMContentLoaded", function() {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function date() {
        var today = new Date();
        var dayNames = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п’ятниця', 'субота'];
        var day = capitalizeFirstLetter(dayNames[today.getDay()]);
        var options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        var formattedDate = today.toLocaleDateString('uk-UA', options);
        document.getElementById('date').innerHTML = day + ', ' + formattedDate;
    }

    function clock() {
        var today = new Date();
        var hour = zeros(today.getHours());
        var minutes = zeros(today.getMinutes());
        var seconds = zeros(today.getSeconds());
        document.getElementById('hour').innerHTML = hour;
        document.getElementById('min').innerHTML = minutes;
        document.getElementById('sec').innerHTML = seconds;
    }

    // Adds zero in front of single-digit number
    function zeros(num) {
        if (num < 10) {
            num = '0' + num;
        }
        return num;
    }

    function dateTime() {
        date();
        clock();
        setTimeout(dateTime, 500);
    }

    dateTime();
});
