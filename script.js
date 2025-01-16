function date() {
    var today = new Date();
    var options = {
     weekday: 'long',
     year: 'numeric',
     month: 'long',
     day: 'numeric',
};
    document.getElementById('date').innerHTML = today.toLocaleDateString('uk-UK', options);
}


function clock() {
    var today = new Date();
    var hour = zeros(twelveHour(today.getHours()));
    var minutes = zeros(today.getMinutes());
    var seconds = zeros(today.getSeconds());
    // console.log(today.toLocaleTimeString());
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('min').innerHTML = minutes;
    document.getElementById('sec').innerHTML = seconds;
}

function twelveHour(hour) {
  return hour = hour 
}
// adds zero infront of single digit number
function zeros(num) {
    if (num < 10) {
        num = '0' + num
    };
    return num;
}

function dateTime() {
    date();
    clock();
    setTimeout(dateTime, 500);
}

dateTime()
// END