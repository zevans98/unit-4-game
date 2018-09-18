$(document).ready(function(){
    var random=Math.floor(Math.random()*101+19)

    $('#targetscore').text(random);

    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)

    var userTotal = 0;
    var wins =  0;
    var losses = 0;

    $('#wins').text(wins);
    $('#losses').text(losses);

    function reset(){
        random = Math.floor(Math.random()*101+19);
        console.log(random)
        $('#targetscore').text(random);
        num1 = Math.floor(Math.random()*11+1);
        num2 = Math.floor(Math.random()*11+1);
        num3 = Math.floor(Math.random()*11+1);
        num4 = Math.floor(Math.random()*11+1);
        userTotal = 0;
        $('#totalscore').text(userTotal);
    }
    function win(){
        alert ("you win");
        wins++;
        $('#wins').text(wins);
        reset();
    }
    function lose(){
        alert ("you lose");
        losses++;
        $('#losses').text(losses);
        reset();
        
    }

    $('#gem1').on('click', function(){
        userTotal = userTotal +num1;
        $('#totalscore').text(userTotal);
        if (userTotal == random){win();
        }
        else if (userTotal > random){
            lose();
        }

        
        
    })

    $("#gem2").on('click', function(){
        userTotal = userTotal+num2;
        $('#totalscore').text(userTotal);
        if (userTotal == random){
            win();

        }
        else if (userTotal > random) {
            lose()
        }
    })

    $('#gem3').on('click' , function(){
        userTotal = userTotal + num3;
        $('#totalscore').text(userTotal);
        if (userTotal == random){
            win();
        }
        else if (userTotal > random){
            lose();
        }
    })
    $('#gem4').on('click', function(){
        userTotal = userTotal + num4;
        $('#totalscore').text(userTotal);
        if (userTotal == random){
            win();
        }
        else if (userTotal > random){
            lose()
        }
    })





    
})