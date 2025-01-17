document.addEventListener("DOMContentLoaded", function() {
    function date() {
        var today = new Date();
        var options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        document.getElementById('date').innerHTML = today.toLocaleDateString('en-US', options);
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
