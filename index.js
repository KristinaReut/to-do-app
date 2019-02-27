$(function(){

$(".new-todo").keypress(function(event){
var newTodoText = $(".new-todo").val().trim();
if(newTodoText != '' && event.which == "13") {
var liNew = '<li> <div class="view"> <input class="toggle" type="checkbox"> <label>' + newTodoText + '</label> <button class="destroy"></button> </div> <input class="edit" value="'+newTodoText+'"> </li>';
$(".todo-list").append(liNew);
$(".new-todo").val(""); };
$(".destroy").click(function(){
$(this).parents("li").remove();
count();
});  
    $(".todo-list li").dblclick(function (e) {
        var input = $(e.target).closest('li').addClass('editing').find('.edit');
        input.focus();
        
     
   
         $("input").keypress(function (ev) {
           if (ev.which == "13") {
            $(e.target).closest('label').text(ev.target.value);
            $(e.target).closest('li').removeClass("editing");
            if (ev.target.value == "") { 
                $(e.target).closest('label').remove();
            }
            } ;
           
          console.log(ev.target.value); });
         $(".todo-list li").focusout(function () {
       $(e.target).closest('li').removeClass("editing");
      });

    });
    
$(".toggle").change(function() {

if($(this).prop("checked")) {
$(this).parents("li").css({"color":"gray", "text-decoration":"line-through"}); 
}
else {$(this).parents("li").css({"color":"black", "text-decoration":"none"});;}
});
$(".toggle-all").change(function() {
if($(this).prop("checked")) {
$(".toggle").prop('checked', true);
$(".toggle").parents("li").css({"color":"gray", "text-decoration":"line-through"});
count();
}
else {
$(".toggle").prop('checked', false);
$(".toggle").parents("li").css({"color":"black", "text-decoration":"none"});
count();
}
});

count()});

$(".destroy").click(function(){
$(this).parents("li").remove();
count();
});





$(".footer").change(function() {
if ($(".todo-list li").length == 0) {$(".footer").css("display", "none");}
else {$(".footer").css("display", "block")};
count();
});


var count = function(){
var li = $(".todo-list li").length;
var liCheck = $('.todo-list input:checked').length ;
var item = li - liCheck;
if (item > 1) {$( ".todo-count" ).html( item + " items left" );}
else {$( ".todo-count" ).html( item + " item left" );}

if(liCheck == 0) {$(".clear-completed").hide();}
  else{ $(".clear-completed").show();}
  if(li == 0) {$(".footer").hide();}
else {$(".footer").show();}
;};

 count();



$("a").click(function(){
$("a").removeClass("selected");
$(this).toggleClass("selected");
});



count();
$("a[href='#/completed']").click(function(){ $("ul.todo-list li").has("input").hide();
    $("ul.todo-list li").has("input:checked").show(); });
$("a[href='#/']").click(function(){ $("ul.todo-list li").has("input").show();
   });
$("a[href='#/active']").click(function(){  $("ul.todo-list li").has("input").show();
    $("ul.todo-list li").has("input:checked").hide();});


$("body").change(count);



$(".clear-completed").click(function(){
$("li").has("input:checked").remove();
count();
});



});
