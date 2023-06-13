// JavaScript Document
$(function(){
    $("nav a").hover(function(){
        $(this).animate({
            width:"300px",
            marginLeft:"50px",
            marginTop:"10px",
            marginBottom:"10px"
        }, 500)
    }, function(){
        $(this).animate({
            width:"180px",
            marginLeft:"0",
            marginTop:"0",
            marginBottom:"2px"
        }, 500)
    })
})