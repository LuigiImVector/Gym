/* Counter */
var x = 0;
var y = 0;
var numeroRipetizioni = 0; /* Nome variabile da modificare (forse) */
var counterPreTimer = 3; 
var restCounter = 0;
var intervalCounter = 0;
/* Boolean */
var preTimerCheck = false;
var restCheck = false;
var error = false;
var noValue = false;
/* Value */
var timeValue;
var repeatValue;
var restValue;
/* Other */
var threeSec = new Audio('/opt/lampp/htdocs/Gym/audio/countdown-3sec.mp3');
var threeSecExtended = new Audio('/opt/lampp/htdocs/Gym/audio/countdown-3sec-extended.mp3');
var repeatInput = document.getElementById("repeat");
var interval = [];


/* Disabilitare l'input (repeat) appena viene "checkato" il checkbox */
document.getElementById("repeat-checkbox").onclick = function () {
    if (document.getElementById("repeat-checkbox").checked == true)
    {
        document.getElementById("repeat").disabled = true;
    } else {
        document.getElementById("repeat").disabled = false;
    }

    repeatInput.value = ''; /* Elimina i valori presenti nell'input box 'repeat' */
}


function timer()
{
    /* Reset schermata PopUp */
    document.getElementById("popup-number").innerHTML = "3";
    document.getElementById("popup-status").innerHTML = "Pre-Timer";
    document.getElementById("popup-status").style.display = "block";
    document.getElementById("popup-numero-ripetizioni").innerHTML = "0";
    document.getElementById("popup-numero-ripetizioni").style.display = "block";
    document.getElementById("popup-timer").style.backgroundColor = "#dfaa0a";

    /* Reset variabili */
    numeroRipetizioni = 0;
    counterPreTimer = 3;
    restCounter = 0;
    x = 0;
    y = 0;   
    preTimerCheck = false;
    noValue = false;
    restCheck = false;   
    error = false;

    /* Acquisizione nuove variabili */
    timeValue = document.getElementById("time").value;
    restValue = document.getElementById("rest").value;
    checkbox = document.getElementById("repeat-checkbox");
    if (checkbox.checked == false) {
        repeatValue = document.getElementById("repeat").value;
    }
    


/* Verifica variabili */

    /* Time */
    if (timeValue == "")
    {
        error = true;
        noValue = true;
    } else if (timeValue <= 0)
    {
        error = true;
    }

    /* Rest */
    if (restValue == "")
    {
        error = true;
        noValue = true;
    } else if (restValue <= 0)
    {
        error = true;
    }

    /* Repeat */
    if (repeatValue == "" && checkbox.checked == false)
    {
        error = true;
        noValue = true;
    } else if (repeatValue <= 0 && checkbox.checked == false)
    {
        error = true;
    }
    

    if (error == true) /* Mostra messaggio di errore */
    {
        if (noValue == true) {
            document.getElementById("timer-error-message").innerHTML = '<b style="padding-right: 3px">Attenzione!</b> Compilare tutti i campi.';
        } else {
            document.getElementById("timer-error-message").innerHTML = '<b style="padding-right: 3px">Attenzione!</b> I valori devono essere maggiori di 0.';
        }

        document.getElementById("timer-error-message").style.display = "flex";
    } else /* Inizia il vero e proprio programma */
    {

        document.getElementById("timer-error-message").style.display = "none";
        document.getElementById("popup-timer").style.opacity = "1";
        document.getElementById("popup-timer").style.visibility = "visible";

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

                    document.getElementById("popup-number").innerHTML = x;

                    /* Audio 3 secondi */
                    if(checkbox.checked == false)   /* Ripetizioni limitate */
                    {   
                        /* Countdown 3sec */
                        if(x==(timeValue-3) && y<(repeatValue-1))
                        {
                            threeSec.play();
                            
                        }
                            /* Ultimo countdown 3 sec - Audio prolungato */
                            else if (x==(timeValue-3) && y==(repeatValue-1))
                            {
                                threeSecExtended.play();
                            }
                        
                    } else if (checkbox.checked == true && x==(timeValue-3))    /* Ripetizioni infinite */
                    {
                        threeSec.play();
                    }         

                    /* Fine di una ripetizione */
                    if(x>timeValue)
                    {
                        x=0;
                        document.getElementById("popup-number").innerHTML = x;
                        restCheck=true;
                        y++;
                    }

                    /* Fine timer */
                    if (y==repeatValue && checkbox.checked == false)
                    {                
                        clearInterval(interval[intervalCounter]);
                        document.getElementById("popup-number").innerHTML = "Fine";
                        document.getElementById("popup-timer").style.backgroundColor = "#05c848";
                        document.getElementById("popup-numero-ripetizioni").style.display = "none";
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
                        numeroRipetizioni++;
                        document.getElementById("popup-numero-ripetizioni").innerHTML = numeroRipetizioni;
                        
                    }

                    restCounter++;
                }
            }

            /* Stop timer e azzeramento variabili - Tutto torna normale */
            document.getElementById("popup-stop").onclick = function ()
            {
                document.getElementById("popup-timer").style.opacity = "0";
                document.getElementById("popup-timer").style.visibility = "hidden";

                clearInterval(interval[intervalCounter]);
                threeSec.pause();
                threeSec.currentTime = 0;
                threeSecExtended.pause();
                threeSecExtended.currentTime = 0;                           
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