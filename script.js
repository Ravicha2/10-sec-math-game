$(document).ready(function (){
    var ansInput = document.getElementById('answer');
    var currentScore = 0;
    var highscore = 0;
    var countdownValue = 0;
    var currentAns;
    var startButton = document.getElementById('starter');
    var countdownFunc;

    var questionGen = function () {
        $('#question').empty();
        var num1 = Math.floor((Math.random())*10+1);
        var num2 = Math.floor((Math.random())*10+1);
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
            
            if (countdownValue <= 0) {
                clearInterval(countdownFunc);
                questionGen();
                ansInput.value = "";
                currentScore = 0;
                $('.Currentscore').text("Current score: "+currentScore);
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
});
