$(document).ready(function() {
  $("form#button").submit(function(event) {

    var inputs = ["one", "two", "three", "four", "five"];
    var array2 = [];
    // var array3 = [];

    inputs.forEach(function(input) {
      array2.push($("input#" + input).val());
      array2.sort();
    });

    array3 = array2.map(function(input) {
      return input.toUpperCase();
    });
  $("div#blanks").hide();

  array3.forEach(function(input){
    $("ul#final").append("<li>" + input + "</li>");
  });

  event.preventDefault();
  });
});
