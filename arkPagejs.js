


var CountDown = 0.00; 
//lets say someone sets the countdown to 1.57
//lets also say this is smalls and the timer resets every 15.30
CountDown = 0.00;

//heres the sitch.
//we need a function that when called by the start button uses the server name and time to create a new countdown.
//if the server name is left to it's defualt value it should count up from server1 to server2 and so on.

window.onload = function(){setUpListeners()};


function setUpListeners(){
    document.getElementById("start button").onclick = function(){
        createTimer();
    }
}

function createTimer(){
    console.log("this function should create a timer when called according to the notes on line 9")
    //timer and server values from timer menu
    var tinput = document.getElementById("tinput").value;
    var sinput = document.getElementById("sinput").value;

    //firstly lets reset whats acutally in the dom because we have both the inputs we need from it.
    //this way every time we click on the start timer button the values are reset to their defualts
    document.getElementById("tinput").value = "0.00";
    document.getElementById("sinput").value = "Server";

    //now i need to create a new row to the table. I make the new row first so that the code that counts time has a place to display it.
    //I think having something concrete(the display area) will also make things more clear

    //to append a new table i need to make the table innerHTML equall itself plus the new row

    document.getElementById("tbodydisplay").innerHTML = document.getElementById("tbodydisplay").innerHTML + "<tr><th scope='row'>3</th><td>"+sinput+"</td><td>"+tinput+"</td><td>pvp at blue ob</td></tr>";
    
    //now i need a function that somehow keep those times up to date
    /* --------BrainStorming Jarbled----------
    #1 try to call the setInterval function inside this (createTimer function) that keep track of one timer.
    #2 use only one setInterval function that updates every timer by looping through the table getting the times, and updateing each one individually. To update each one I could loop through the rows of the table and update each timer.
    I think option two is better but will probably be more complicated.
    
    */


}

   






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

   // console.log("min: " + minutes);
  //  console.log("sec: " + seconds);
  //  console.log("countDown: " + CountDown);
    document.getElementById("goal2").innerHTML = CountDown;
  //  console.log(document.getElementById("goal2").innerHTML)
},1000);