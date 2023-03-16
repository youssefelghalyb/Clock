function clock (){
let date = new Date();

let day = date.getDay();
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let flag = "AM"

switch (day){
    case 0 : 
    day = "Sun";
    break ; 
    case 1 : 
    day = "Mon";
    break ; 
    case 2 : 
    day = "Tues";
    break ; 
    case 3 : 
    day = "Wed";
    break  ;
    case 4  : 
    day = "Thurs";
    break  ;
    case 5 : 
    day = "Fri";
    break ; 
    case 6 : 
    day = "Sat";
}

if(hour == 0 ){
    hour = 12;
}
else if (hour > 12){
    hour = hour - 12 ;
    flag = "PM"
}


if (hour < 10){
    hour = "0" + hour
}
if (min < 10){
    min = "0" + min
}
 if (sec < 10){
    sec = "0" + sec
}

document.querySelector('.clock').innerText = `${day} : ${hour} : ${min} : ${sec} : ${flag}   `;

setTimeout(function(){
    clock()
}, 1000)

}

clock ()
