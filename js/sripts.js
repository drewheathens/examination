var answers = ["dog", "an-artist", "||", "script", "#", "7"];
var points = 10;
$(document).ready(function() {
    $("#btn").submit(function(event) {
        var blanks = ["answer1", "answer2", "answer3", "answer4", "answer5", "answer6"];
        blanks.forEach(function(blank){
          var userInput = $("input# +blank").val();
          $("." +blank).text(userInput);

        });

        $("#show-score!").show();

        event.preventDefault();
    });
})
