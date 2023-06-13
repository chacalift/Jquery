// JavaScript Document

/*
$(function(){
    $("#box").fadeOut(5000)
    $("#box").fadeIn(5000)
})
*/

$(function(){
    $("#mostrar").click(function(){
        $("#box img").fadeIn(1000)
    })
    $("#ocultar").click(function(){
      $("#box img").fadeOut(1000)
    })
})