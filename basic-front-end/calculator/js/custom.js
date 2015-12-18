$(function() {
  var x = "";
  var formula = "";
  var solution = "";

  function formulaBuilder(input) {
    formula = formula + x + input;
    x = "";
    $("#calc-screen").text(x);
  };

  $(".calc-number").on("click", function() {
    x = x + $(this).text();
    $("#calc-screen").text(x);

  });
  $(".control").on("click", function() {
    if ($(this).text() === "AC") {
      $("#calc-screen").text("");
      x = "";
      formula = "";
    } else if ($(this).is("#clear-entry")) {
      $("#calc-screen").text("");
      x = "";

    } else if ($(this).is("#equal")) {
      formula = formula + x;
      $("#calc-screen").text(eval(formula));
      x = "";
      formula = "";

    } else if ($(this).is("#add")) {
      formulaBuilder("+");

    } else if ($(this).is("#subtract")) {
      formulaBuilder("-");

    } else if ($(this).is("#multiply")) {
      formulaBuilder("*");

    } else if ($(this).is("#divide")) {
      formulaBuilder("/");

    } else if ($(this).is("#decimal")) {
      formulaBuilder(".");

    } else {
      formula = formula + x + "*"; // $(this).text();
      x = "";
      $("#calc-screen").text(x);
    }
  });

});
