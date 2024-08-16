$(document).ready(function (){
    var ansInput = document.getElementById('answer');
    var currentScore = 0;
    var highscore = 0;

    var currentAns;
    var questionGen = function () {
        $('#question').empty();
        var num1 = Math.floor((Math.random())*10+1);
        var num2 = Math.floor((Math.random())*10+1);
        $('#question').append('<p>'+ num1 + " + " + num2 + '</p>');
        currentAns = num1 + num2;
        if ( currentScore > highscore){
            highscore = currentScore;
        }
        $('.Currentscore').text("Current score: "+currentScore);
        $('.Highscore').text("High score: "+highscore);
    }
    ansInput.addEventListener('input', function () {
        var userAns = parseInt(ansInput.value,10);
        if(userAns == (currentAns)){
            currentScore += 1;
            questionGen();
            ansInput.value = "";
        }
    });
    questionGen();
});