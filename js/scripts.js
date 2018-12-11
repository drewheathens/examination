
$(document).ready(function() {
    $("#btn").submit(function(event) {
    $("#totalResult").innerHTML('');
      var answers = ["dog", "an-artist", "||", "script", "#", "7"];
      var points = 10;
      var scores = 0;
       var answer1=document.querySelector('input[name="answer1"]:checked').value;
          var answer2=document.querySelector('input[name="answer2"]:checked').value;
          var answer3=document.querySelector('input[name="answer3"]:checked').value;
          var answer4=document.querySelector('input[name="answer4"]:checked').value;
          var answer5=document.querySelector('input[name="answer5"]:checked').value;
          var answer6=document.querySelector('input[name="answer6"]:checked').value;

          if(answer1===answers[0]) {
            scores += points;
          }
          if(answer2===answers[1]) {
            scores += points;
          }
          if(answer3===answers[2]) {
            scores += points;
          }
          if(answer4===answers[3]) {
            scores += points;
          }
          if(answer5===answers[4]) {
            scores += points;
          }
          if(answer6===answers[5]) {
            scores += points;
          }
          else {
            alert("hey");
          }
      var add = function(points, scores){
        return  ++ points;

      var totalResult= add;

      document.getElementById("after submit").style.visibility ="visible";
      document.getElementById("totalResult").innerHTML ="You got " + points + "%";

      $("#quiz-board").hide();
      $("#totalResult").show();


        };


        event.preventDefault();


    });
    });
