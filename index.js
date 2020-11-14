/* Test */

document.getElementById("timer-submit").onclick = function()
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
        document.getElementById("error-timer-message").style.display = "flex";
    }

    if (check==true)
    {
        document.getElementById("error-timer-message").style.display = "none";
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
    document.getElementByClass("test").style.display = "none";
    document.getElementById("secondPage").style.display = "flex";
}

document.getElementById("navbar-title").onclick = function ()
{
    document.getElementById("secondPage").style.display = "none";
    document.getElementById("thirdPage").style.display = "none";
    document.getElementByClass("test").style.display = "block";
}