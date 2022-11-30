"use strict"

var hora = 0;
var min = 0;
var seg = 0;
var cron;


function start(){
    clearInterval(cron);
    cron = setInterval(timer, 1000);
}

function pause(){
    clearInterval(cron);
}

function pare(){
    clearInterval(cron);
    hora = 0;
    min = 0;
    seg = 0;
    document.getElementById("count").innerHTML = "00:00:00";
}

function timer(){
    seg++;
    if(seg == 60){
        min++;
        seg = 0;
    }
    if(min == 60){
        hora++;
        min = 0;
    }
    if(hora == 24){
        hora =0
    }
    

    var format = (hora < 10 ? "0" +hora: hora)+":"+(min < 10 ? "0"+ min: min)+":"+(seg < 10 ? "0"+seg : seg);
    document.getElementById("count").innerHTML = format;
}