/* function startTimer(y, timeValue)
{
    if(y<=timeValue)
    {
        setTimeout(function()
                    {
                            
                        document.getElementById("popup-number").innerHTML = y;
                        y++;                          
                        startTimer(y, timeValue);
                    }, 1000);
    }
}

function timerRepeat (x, repeatValue, y, timeValue)
{
    if (x<repeatValue)
    {
        startTimer(y, timeValue);
        y=1;
        x++;
        timerRepeat (x, repeatValue, y, timeValue);
    }
}

function start(i, counter){
    if(i<2)
    {
    if(counter < 10){
      setTimeout(function(){
        counter++;
        console.log(counter);
        
      }, 1000);
    }
    i++;
    counter=0;
    start(i, counter);
}
  }

function anotherTimer(x, repeatValue, y, timeValue)
{
    if (x<repeatValue)
    {
        if(y<=timeValue)
        {
            setTimeout(function()
                        {
                                
                            document.getElementById("popup-number").innerHTML = y;
                            y++;                          
                            anotherTimer(x, repeatValue, y, timeValue);
                        }, 1000);
        }
        y=1;
        x++;
    }
} */

/* if(counter < 10)
    {
      setTimeout(function(){
        counter++;
        document.getElementById("popup-number").innerHTML = counter;
        start(counter);
      }, 1000);
    } */

document.getElementById("submit").onclick = function()
{
    /* alert("ciao"); */
    var timeValue = document.getElementById("time").value;
    var repeatValue = document.getElementById("repeat").value;
    var x = 0;
    var y = 1;
    var check = true;
    var error = false;

    if (timeValue == "")
    {
        check = false;
        error = true;
    }

    if (repeatValue == "")
    {
        check = false;
        error = true;
    }

    if (error==true)
    {
        document.getElementById("error-message").style.display = "flex";
    }

    if (check==true)
    {
        document.getElementById("error-message").style.display = "none";
        document.getElementById("popup-timer").style.display = "block";

        /* Timer */
        
    }  
}   //Fine funzione

document.getElementById("popup-stop").onclick = function()
{
    document.getElementById("popup-timer").style.display = "none";
}

document.getElementById("navbar-login").onclick = function ()
{
    document.getElementById("").style.display = "none";
}