

//varibales for testing purposes, not actually in use on final website
var CountDown = 0.00; 
CountDown = 0.00;


//listeners must only be set up after the page is loaded or the getElementById function returns null
window.onload = function(){setUpListeners()};

//setting up the lisetener, could have done this inside line 9 but if more functions are added this will make things
//easier to read
function setUpListeners(){
    document.getElementById("start button").onclick = function(){
        createTimer();
    }
}

    /* --------createTimer()----------
    This function creates a new row in the table using the time and server input fields information from the menu on the
    left of the table. Another function below will loop through the table and update every entry once per second
    so that time is kept up to date. 
    */

function createTimer(){
   
    //timer and server values from timer menu
    var tinput = document.getElementById("tinput").value;
    var sinput = document.getElementById("sinput").value;

    //resets whats in the dom as that data is already saved through tinput and sinput above.
    //this way that menu resets every time the button is pressed.
    document.getElementById("tinput").value = "0:00";
    document.getElementById("sinput").value = "Server";

    //adding another row to the table, now the only thing to do is update each row every second in a helper function below.
    document.getElementById("tbodydisplay").innerHTML = document.getElementById("tbodydisplay").innerHTML + "<tr><th scope='row'>3</th><td>"+sinput+"</td><td>"+tinput+"</td><td>pvp at blue ob</td></tr>";   
}

    /* --------countDownEntryUpdater()----------
    keeps every entry made by createTimer() up to date by looping through the tbody element.
    As the loop loops through the rows it will take the current time of a timer and replace it with itself plus
    one second.

    By "updating" every row once per second each entry will have an accurate time
    */


setInterval(function countDownEntryUpdater(){
    //grabs the table element and loops through it
    
    for(var i = 0; i < document.getElementById("tbodydisplay").querySelectorAll('tr').length; i++){
        //grabs the row
        var row = document.getElementById("tbodydisplay").querySelectorAll('tr')[i];

        //grabs the time from the row
        var time = row.querySelectorAll('td')[1].innerHTML;
        
        //gets the part of the time var that comes before the ':'
        var minutes = Number(time.substring(0, time.indexOf(':')));
        //console.log(minutes);

        //gets the second part of the time var that comes after the ':'
        var seconds = Number(time.substring(time.indexOf(':')+1));
        //console.log(seconds);
        
        seconds = seconds - 1;
        //console.log(seconds);

        if(seconds < 0){
            minutes = minutes - 1;
            seconds = 60
        }

        if(minutes < 0){
            minutes = 15
            seconds = 30
        }

        row.querySelectorAll('td')[1].innerHTML = (minutes + ":" + seconds);
    }

},1000);




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