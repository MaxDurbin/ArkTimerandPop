


var CountDown = 0.00; 
//lets say someone sets the countdown to 1.57
//lets also say this is smalls and the timer resets every 15.30
CountDown = 2.05;
setInterval(function(){
    
    //trunk is definatly what we want to use becuase round will screw up ancase where sec is > 50sec. becuase the min would be rounded to one min higher than it really should be.
    var minutes = (Math.trunc(CountDown));
    //modulus countdown divided by 1 ie the remainder of countdown divided by 1. leaves us with a decimal remainder. we then cut off what we don't want by using toFixed()
    var seconds = (Number((CountDown%1).toFixed(2)));

    seconds = Number((seconds-.01).toFixed(2));

    if(seconds < 0){
        minutes = minutes - 1;
        seconds = .60
    }

    if(minutes < 0){
        minutes = 15
        seconds = .30
    }


    //we need to recombine these two numbers after incrementing seconds so that the timer can be updated.

    CountDown = (Number((minutes+seconds).toFixed(2)));
    //console.log(minutes);
    //console.log(seconds);
    //console.log(minutes+seconds);

    console.log("min: " + minutes);
    console.log("sec: " + seconds);
    console.log("countDown: " + CountDown);


},1000);