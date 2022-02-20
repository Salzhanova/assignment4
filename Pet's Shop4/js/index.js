
$("h1" ).click(function() {
    $( "p" ).slideToggle();
  });

$(document).ready(function(){
    $("p").mouseover(function(){
      $(this).css("color", "CadetBlue");
    });
    $("p").mouseout(function(){
      $(this).css("color", "white");
    });
});

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}