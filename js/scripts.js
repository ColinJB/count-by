$(function() {
  $("form#inputNumber").submit(function(event) {
    var inputCount = parseFloat($("input#countNumber").val());
    var inputMult = parseFloat($("input#multNumber").val());
    var countArray = [];
    if (isNaN(inputCount)=== true || isNaN(inputMult)=== true) {
      alert("Please enter valid numbers.");
    } else if (inputCount <= 0 || inputMult <=0) {
      alert("Please enter a positive integer.")
    } else if (inputCount < inputMult) {
      alert("Please check your numbers and enter them again.")
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
