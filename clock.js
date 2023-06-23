function clock(){


    let hour = new Date().getHours(); 
    let minute = new Date().getMinutes(); 
    let second = new Date().getSeconds(); 
    let lightTime = "AM";

    if(hour == 0){
        hour = 12;
    }
    
    if(hour > 12){
        hour = hour - 12;
        lightTime = "PM";
    }
    
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;
    
    
    let time = hour + ":" + minute + ":" + second + " " + lightTime;
    document.getElementById("displayClock").innerText = time;
    document.getElementById("displayClock").textContent = time;
    
    setTimeout(clock, 1000);
    
}
clock();

function showDate(){
    let day = new Date().getDay();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let monthDay = new Date().getDate();
    

    let dayName;
    
    switch(day){
        case 0:
            dayName = "Sunday"
            break
        case 1:
            dayName = "Monday"
            break
        case 2:
            dayName = "Tuesday"
            break
        case 3:
            dayName = "Wednesday"
            break
        case 4:
            dayName = "Thursday"
            break
        case 5:
            dayName = "Friday"
            break
        case 6:
            dayName = "Saturday"
            break
    }

    let monthName;

    switch(month){
        case 0:
            monthName = "January"
            break
        case 1:
            monthName = "February"
            break
        case 2:
            monthName = "March"
            break
        case 3:
            monthName = "April"
            break
        case 4:
            monthName = "May"
            break
        case 5:
            monthName = "June"
            break
        case 6:
            monthName = "July"
            break
        case 7:
            monthName = "August"
            break
        case 8:
            monthName = "September"
            break
        case 9:
            monthName = "October"
            break
        case 10:
            monthName = "November"
            break
        case 11:
            monthName = "December"
            break
    }


    let dat = monthDay + " " + monthName + " " + year + " " + dayName;
    document.getElementById("displayDate").innerText = dat;
    document.getElementById("displayDate").textContent = dat;
    setTimeout(showDate, 1000);

}

showDate();



