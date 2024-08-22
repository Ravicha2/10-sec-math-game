$(document).ready(function (){
    var ansInput = document.getElementById('answer');
    var currentScore = 0;
    var highscore = 0;
    var countdownValue = 0;
    var currentAns;
    var startButton = document.getElementById('starter');
    var countdownFunc;
    var mod1 = 10;
    var mod2 = 1;
    var questionGen = function () {
        $('#question').empty();
        var num1 = Math.floor((Math.random())*mod1+mod2);
        var num2 = Math.floor((Math.random())*mod1+mod2);
        $('#question').append('<p>'+ num1 + " + " + num2 + '</p>');
        currentAns = num1 + num2;
        ansInput.value = "";

        if (currentScore > highscore) {
            highscore = currentScore;
        }
        $('.Currentscore').text("Current score: "+currentScore);
        $('.Highscore').text("High score: "+highscore);
    }

    var timefunc = function () {
        countdownValue = 10;
        $('.countdown').text(countdownValue);

        countdownFunc = setInterval(function() {
            countdownValue--;
            $('.countdown').text(countdownValue);
            //$('#starter').remove();
            if (countdownValue <= 0) {
                clearInterval(countdownFunc);
                questionGen();
                ansInput.value = "";
                currentScore = 0;
                $('.Currentscore').text("Current score: "+currentScore);
                //$('.start').append('<button id="starter">start</button>');
                //$('#starter').addEventListener('click',timefunc);
            }
            
        }, 1000);
    }

    ansInput.addEventListener('input', function () {
        var userAns = parseInt(ansInput.value, 10);
        if (userAns === currentAns) {
            currentScore += 1;
            countdownValue += 1;
            questionGen();
            ansInput.value = "";
        }
    });

    questionGen();
    
    startButton.addEventListener('click', timefunc);
    
    var modeSelection = document.getElementById('mode');
    modeSelection.addEventListener('change', function(e) {
        var selected = e.target.value;
        console.log(selected+' is selected');
        if (selected === 'easy') {
            mod1 = 9;
            mod2 = 1;
        }
        if (selected === 'normal') {
            mod1 = 20;
            mod2 = 10;
        }
        if (selected === 'hard') {
            mod1 = 37;
            mod2 = 23;
        }
        if (selected === 'asian') {
            mod1 = 103;
            mod2 = 17;
        }
    })
});
