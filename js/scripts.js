$(function() {
  $("form#inputNumber").submit(function(event) {
    var inputCount = parseInt($("input#countNumber").val());
    var inputMult = parseInt($("input#multNumber").val());
    var countArray = [];
    if (isNaN(inputCount)=== true || isNaN(inputMult)=== true) {
      alert("Please enter valid numbers");
    } else {
    for (var index = inputMult; index <= inputCount; index += inputMult) {
      countArray.push(" " + index);
    };
    var result = countArray.toString();
    $("#outputString").text("Your result is: " + result);
    $("#countTo").text("The number you wish to count to is: " + inputCount);
    $("#countBy").text("The number you wish to count by is: " + inputMult);
  };
    event.preventDefault();
  });
});
