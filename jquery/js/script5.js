// JavaScript Document

$(function(){
    
    $(".n1").click(function(){
        $(".f1").stop().animate({width:"toggle"},1000)
		if($(".f2").is(":visible")){$(".f2").animate({width:"toggle"}, 1000)}
		else if($(".f3").is(":visible")){$(".f3").animate({width:"toggle"}, 1000)}
		else if($(".f4").is(":visible")){$(".f4").animate({width:"toggle"}, 1000)}
    })
    
    $(".n2").click(function(){
        $(".f2").stop().animate({width:"toggle"},1000)
		if($(".f1").is(":visible")){$(".f1").animate({width:"toggle"}, 1000)}
		else if($(".f3").is(":visible")){$(".f3").animate({width:"toggle"}, 1000)}
		else if($(".f4").is(":visible")){$(".f4").animate({width:"toggle"}, 1000)}
	    })
        $(".n3").click(function(){
        $(".f3").stop().animate({width:"toggle"},1000)
		if($(".f1").is(":visible")){$(".f1").animate({width:"toggle"}, 1000)}
		else if($(".f2").is(":visible")){$(".f2").animate({width:"toggle"}, 1000)}
		else if($(".f4").is(":visible")){$(".f4").animate({width:"toggle"}, 1000)}
	    })
    
    $(".n4").click(function(){
        $(".f4").stop().animate({width:"toggle"}, 1000)
		if($(".f1").is(":visible")){$(".f1").animate({width:"toggle"}, 1000)}
		else if($(".f3").is(":visible")){$(".f3").animate({width:"toggle"}, 1000)}
		else if($(".f2").is(":visible")){$(".f2").animate({width:"toggle"}, 1000)}
    })
    
})