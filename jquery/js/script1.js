// JavaScript Document

/*
Este comando será executado automaticamente quando entrar na página

alert("Boa noite a todos!")


Este comando será executado quamdp a função for ativada no html, neste exemplo chamamos no botão

function teste(){
    alert("Boa noite a todos!")
}


Este comando é executado automaticamente ao entrar na página, mas utilizando o JQuery

$(function(){
    alert("Boa noite a todos!")
})

*/

//Este comando será executado ao clicar no botão com JQuery
$(function(){
    $("#botao").click(function(){
        alert("Boa noite a todos!")
    })
})



