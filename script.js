// 1. Create a  function to convert 24 hr time to 12hr time
let present_date = new Date();
let present_hour = present_date.getHours();
function convert_twentyfour_hour_to_twelve_hour(){
    if(present_hour > 12){
        console.log(present_hour-12);
    }
    console.log(present_hour);
}
convert_twentyfour_hour_to_twelve_hour(present_hour)

// 2. create a function to generate the otp of 6 digits
function otp(){
    console.log((Math.random(otp)*1000000).toFixed(0));
}
otp(otp)

// 3. based on the number create a function to return day of the week
let today = new Date()
let day = today.getDate()

function weekDay(){
    switch(new Date().getDay()){
        case 0:{
            console.log("Sunday");
            break;
        }
        case 1:{
            console.log("Monday");
            break;
        }
        case 2:{
            console.log("Tuesday");
            break;
        }
        case 3:{
            console.log("Wedday");
            break;
        }
        case 4:{
            console.log("Thursday");
            break;
        }
        case 5:{
            console.log("Friday");
            break;
        }
        case 6:{
            console.log("Saturday");
            break;
        }
    }
}

weekDay()
 