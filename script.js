function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    // var time = setTimeout(function(){ startTime() }, 500);
    setInterval(function(){ eastTime() },1000);
}
function checkTime(i) {
    if (i < 10) { 
        i = "0" + i;
    }
    return i;
}

function eastTime(){ 
        var eastTime = calcTime('Japan','+9');
        var hr = eastTime.getHours();
        var min = eastTime.getMinutes();
        var sec = eastTime.getSeconds();
        ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
        hr = (hr == 0) ? 12 : hr;
        hr = (hr > 12) ? hr - 12 : hr;
        //Add a zero in front of numbers<10
        hr = checkTime(hr);
        min = checkTime(min);
        sec = checkTime(sec);
        document.getElementById("clock1").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
        
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var curWeekDay = days[eastTime.getDay()];
        var curDay = eastTime.getDate();
        var curMonth = months[eastTime.getMonth()];
        var curYear = eastTime.getFullYear();
        var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
        document.getElementById("date1").innerHTML = date;
        setInterval(function(){ calcTime('Japan','+9') },1000); 
        setInterval(function(){ westTime() },1000);   

}
function checkTime(i) {
    if (i < 10) { 
        i = "0" + i;
    }
    return i;
}
function calcTime(city, offset) {
       // create Date object for current location
       var d = new Date();
       
       // convert to msec
       // subtract local time zone offset
       // get UTC time in msec
       var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
       
       // create new Date object for different city
       // using supplied offset
       var nd = new Date(utc + (3600000*offset));
       
       // return time as a string
       return nd;
    
}

function westTime(){
        var westTime = calcTime('New York','-4');
        var hr = westTime.getHours();
        var min = westTime.getMinutes();
        var sec = westTime.getSeconds();
        ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
        hr = (hr == 0) ? 12 : hr;
        hr = (hr > 12) ? hr - 12 : hr;
        //Add a zero in front of numbers<10
        hr = checkTime(hr);
        min = checkTime(min);
        sec = checkTime(sec);
        document.getElementById("clock2").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
        
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var curWeekDay = days[westTime.getDay()];
        var curDay = westTime.getDate();
        var curMonth = months[westTime.getMonth()];
        var curYear = westTime.getFullYear();
        var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
        document.getElementById("date2").innerHTML = date;
        setInterval(function(){ calcTime('New York','-4') },1000); 
        setInterval(function(){ startTime() },1000);   

}
function checkTime(i) {
    if (i < 10) { 
        i = "0" + i;
    }
    return i;
}
function calcTime(city, offset) {
       // create Date object for current location
       var d = new Date();
       
       // convert to msec
       // subtract local time zone offset
       // get UTC time in msec
       var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
       
       // create new Date object for different city
       // using supplied offset
       var nd = new Date(utc + (3600000*offset));
       
       // return time as a string
       return nd;
    
}