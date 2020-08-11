document.getElementById("timer-submit").onclick = function()
{
    var timeValue = document.getElementById("time").value;
    var repeatValue = document.getElementById("repeat").value;
    var x = 0;
    var y = 0;
    var error = false;

    if (timeValue == "")
    {
        error = true;
    } else if (repeatValue == "")
    {
        error = true;
    }

    if (error == true)
    {
        document.getElementById("timer-error-message").style.display = "flex";
    } else
    {
        document.getElementById("timer-error-message").style.display = "none";
        document.getElementById("popup-timer").style.display = "block";

        /* Timer */
        
        var interval = setInterval(function () {

            x++;
            document.getElementById("popup-number").innerHTML = x;

            if(x>timeValue)
            {
                x=0;
                document.getElementById("popup-number").innerHTML = x;
                y++;
            }

            if (y==repeatValue) {
                clearInterval(interval);
            }
        }, 1000);


    }



}

document.getElementById("popup-stop").onclick = function ()
{
    document.getElementById("popup-timer").style.display = "none";
}