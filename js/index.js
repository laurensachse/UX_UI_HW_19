console.log("thisworks!");
$(document).ready(function(){
  $(".home").mouseover(function(){
     
     $(".home").css("font-weight", "bold")
     $(".home").css("transition", "0.3s")
     
  });
  $(".home").mouseout(function(){
     
     $(".home").css("font-weight", "normal")
     $(".home").css("transition", "0.3s")
  });
  $(".work").mouseover(function(){
     
    $(".work").css("font-weight", "bold")
    $(".work").css("transition", "0.3s")
    
 });
 $(".work").mouseout(function(){
    
    $(".work").css("font-weight", "normal")
    $(".work").css("transition", "0.3s")
    
 });
 $(".aboutme").mouseover(function(){
     
  $(".aboutme").css("font-weight", "bold")
  $(".aboutme").css("transition", "0.3s")
});
$(".aboutme").mouseout(function(){
  
  $(".aboutme").css("font-weight", "normal")
  $(".aboutme").css("transition", "0.3s")
});
$(".resume").mouseover(function(){
     
  $(".resume").css("font-weight", "bold")
  $(".resume").css("transition", "0.3s")
});
$(".resume").mouseout(function(){
  
  $(".resume").css("font-weight", "normal")
  $(".resume").css("transition", "0.3s")
});
$(".junklogo").mouseover(function(){
  $(".junklogo").css("height", "100px")
  $(".junklogo").css("transition", "0.3s")
});
$(".junklogo").mouseout(function(){
  $(".junklogo").css("height", "75px")
  $(".junklogo").css("transition", "0.3s")

});
  
});