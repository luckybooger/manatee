$(function() {
  $("h1").click(function() {
    $("#manatee-family").slideDown();
  });
  $(".picture").click(function() {
    $("body").addClass("black-background");
    $("body").addClass("text-color");

  });
});
