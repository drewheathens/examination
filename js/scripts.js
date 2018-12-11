//
// $(document).ready(function() {
//     $("#quiz-board").submit(function(event) {
//     $("#totalResult").innerHTML('');
//       var answers = ["dog", "an-artist", "||", "script", "#", "7"];
//       var points = 10;
//       var scores = 0;
//        var answer1=document.querySelector('input[name="answer1"]:checked').value;
//           var answer2=document.querySelector('input[name="answer2"]:checked').value;
//           var answer3=document.querySelector('input[name="answer3"]:checked').value;
//           var answer4=document.querySelector('input[name="answer4"]:checked').value;
//           var answer5=document.querySelector('input[name="answer5"]:checked').value;
//           var answer6=document.querySelector('input[name="answer6"]:checked').value;
//           document.getElementById('#totalResult');
//
//           if(answer1==answers[0]) {
//             scores += points;
//           }
//           if(answer2==answers[1]) {
//             scores += points;
//           }
//           if(answer3==answers[2]) {
//             scores += points;
//           }
//           if(answer4==answers[3]) {
//             scores += points;
//           }
//           if(answer5==answers[4]) {
//             scores += points;
//           }
//           if(answer6==answers[5]) {
//             scores += points;
//           }
//           $("#totalResult").show();
        //   totalResult="score"
        // console.log("score");
          // else{
          //   scores;
          //   alert("hey you scored 0");
          // }your score is

          // <p id=displayText> <p>
          // <script type="text/javascript">
          // function doSomeThing()
          // {
          //   //do something
          //   document.getElementById("displayText").innerHTML=text1;
          //   //do something
          //   document.getElementById("displayText").innerHTML=text2;
          //   //do something
          //   document.getElementById("displayText").innerHTML=text3;
          // }
          // </script
          // event.preventDefault();
  //
  //   });
  // });




$(document).ready(function() {
  $("form#quiz-board").submit(function(event) {
    // if (answerOne === undefined || answerTwo === undefined || answerThree === undefined || answerFour === undefined || answerFive === undefined) {
    //  $('#unattemptedQuestions').text('Please attempt all questions.');
    //  $('#unattemptedQuestions').fadeOut(10000);
//   }
  // else
    //{

    var answer1 = $("input:radio[name=answer1]:checked").val();
    var answer2 = $("input:radio[name=answer2]:checked").val();
    var answer3 = $("input:radio[name=answer3]:checked").val();
    var answer4 = $("input:radio[name=answer4]:checked").val();
    var answer5 = $("input:radio[name=answer5]:checked").val();
    var answer6 = $("input:radio[name=answer6]:checked").val();
    // var answer = answers(answer1,answer2,answer3,answer4,answer5,answer6);
    var totalResult = parseInt(answer1) + parseInt(answer2) + parseInt(answer3) + parseInt(answer4) + parseInt(answer5) + parseInt(answer6);

    $("#totalResult").text("Your score is "+ totalResult);
      $("form#quiz-board").fadeOut();
      $("hi").show();
      $("#totalResult").toggle();
      event.preventDefault();
  });
//}
});
