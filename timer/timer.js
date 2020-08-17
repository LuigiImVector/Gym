/* Counter */
var x = 0;
var y = 0;
var counterPreTimer = 3;
var restCounter = 0;
var intervalCounter = 0;
/* Boolean */
var preTimerCheck = false;
var restCheck = false;
var error = false;
var valueNotValid = false;
/* Value */
var timeValue;
var repeatValue;
var restValue;
/* Other */
var threeSec = new Audio('/opt/lampp/htdocs/Gym/audio/countdown-3sec.mp3');
var interval = [];



function timer()
{
    timeValue = document.getElementById("time").value;
    repeatValue = document.getElementById("repeat").value;
    restValue = document.getElementById("rest").value;

    /* Reset schermata PopUp */
    document.getElementById("popup-number").innerHTML = "3";
    document.getElementById("popup-status").innerHTML = "Pre-Timer";
    document.getElementById("popup-status").style.display = "block";
    document.getElementById("popup-timer").style.backgroundColor = "#dfaa0a";

    /* Reset variabili */
    counterPreTimer = 3;
    restCounter = 0;
    x = 0;
    y = 0;   
    preTimerCheck = false;
    valueNotValid = false;
    restCheck = false;   
    error = false;
    


    /* Verifica variabili */
    if (timeValue == "")
    {
        error = true;
    } else if (timeValue <= 0)
    {
        error = true;
        valueNotValid = true;
    } else if (repeatValue == "")
    {
        error = true;
    } else if (repeatValue <= 0)
    {
        error = true;
        valueNotValid = true;
    } else if (restValue == "")
    {
        error = true;
    } else if (restValue <= 0)
    {
        error = true;
        valueNotValid = true;
    }


    if (error == true)
    {
        if (valueNotValid == false) {
            document.getElementById("timer-error-message").innerHTML = '<b style="padding-right: 3px">Attenzione!</b> Compilare tutti i campi.';
        } else {
            document.getElementById("timer-error-message").innerHTML = '<b style="padding-right: 3px">Attenzione!</b> I valori devono essere maggiori di 0.';
        }

        document.getElementById("timer-error-message").style.display = "flex";
    } else
    {

        document.getElementById("timer-error-message").style.display = "none";
        document.getElementById("popup-timer").style.display = "block";

        /* Timer */
      
        interval[intervalCounter] = setInterval(function ()
        {

            /* PreTimer - 3 sec */
            if (preTimerCheck == false)
            {
                if (counterPreTimer==3)
                {
                    threeSec.play();
                }
               
                document.getElementById("popup-number").innerHTML = counterPreTimer;
                
                

                if (counterPreTimer==0)
                {
                    preTimerCheck = true;
                }

                counterPreTimer--;
            }


            /* Timer effettivo + Pausa*/
            else if (preTimerCheck == true)
            {
                /* Timer */
                if (restCheck == false)
                {
                    document.getElementById("popup-timer").style.backgroundColor = "#09bdbd";
                    document.getElementById("popup-status").innerHTML = "Lavoro";

                    if(x==(timeValue-3))
                    {
                        threeSec.play();
                    }

                    document.getElementById("popup-number").innerHTML = x;

                    if(x>timeValue)
                    {
                        x=0;
                        document.getElementById("popup-number").innerHTML = x;
                        restCheck=true;
                        y++;
                    }

                    if (y==repeatValue)
                    {                
                        clearInterval(interval[intervalCounter]);
                        document.getElementById("popup-number").innerHTML = "Fine";
                        document.getElementById("popup-timer").style.backgroundColor = "#05c848";
                        document.getElementById("popup-status").style.display = "none";
                    }

                    x++;

                /* Pausa */
                } else if (restCheck==true) {

                    document.getElementById("popup-timer").style.backgroundColor = "#dfaa0a";
                    document.getElementById("popup-status").innerHTML = "Riposo";

                    if(restCounter==(restValue-3))
                    {
                        threeSec.play();
                    }

                    document.getElementById("popup-number").innerHTML = restCounter;

                    if(restCounter>restValue)
                    {
                        restCounter=0;
                        document.getElementById("popup-number").innerHTML = restCounter;
                        restCheck=false;
                        
                    }

                    restCounter++;
                }
            }

            /* Stop timer e azzeramento variabili - Tutto torna normale */
            document.getElementById("popup-stop").onclick = function ()
            {
                document.getElementById("popup-timer").style.display = "none";

                clearInterval(interval[intervalCounter]);
                threeSec.pause();
                threeSec.currentTime = 0;
                           
            }

        }, 1000);


    }   /* Fine dell'Else (Se non ci sono errori continua) */


}   /* Fine funzione - timer */



document.getElementById("timer-submit").onclick = function(){
    timer();
};


document.getElementById("popup-back-again").onclick = function(){

    clearInterval(interval[intervalCounter]);   /* Elimina il vecchio timer per evitare interferenze con il nuovo */
    intervalCounter++;

    threeSec.pause();
    threeSec.currentTime = 0;


    
    timer();
};