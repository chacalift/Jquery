// JavaScript Document
$(function(){
    $(".ajuda, .textoajuda").mouseover(function(){
        $(".textoajuda").stop().slideDown(500)
    })
    $(".ajuda, .textoajuda").mouseout(function(){
        $(".textoajuda").stop().slideUp(500)
    })
})