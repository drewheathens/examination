$(document).ready(function() {
  $("form#quiz-board").submit(function(event) {


    var answer1 = $("input:radio[name=answer1]:checked").val();
    var answer2 = $("input:radio[name=answer2]:checked").val();
    var answer3 = $("input:radio[name=answer3]:checked").val();
    var answer4 = $("input:radio[name=answer4]:checked").val();
    var answer5 = $("input:radio[name=answer5]:checked").val();
    var answer6 = $("input:radio[name=answer6]:checked").val();
      var totalResult = parseInt(answer1) + parseInt(answer2) + parseInt(answer3) + parseInt(answer4) + parseInt(answer5) + parseInt(answer6);

    $("#totalResult").text("Your score is "+ totalResult);
      $("form#quiz-board").fadeOut();
      $("hi").show();
      $("#totalResult").toggle();
      event.preventDefault();
  });
});
