"use strict"

var hh = 0;
var mm = 0;
var ss = 0;

const tempo = 20;
var cronometro;

function timer(){
    ss++;

    if(ss == 60){
        ss = 0;
        mm++;

        if (mm == 60){
            mm = 0;
            hh++;
        }
    }

    var format = (hh < 10 ? '0' +  hh : hh) + ':' + (mm < 10 ? '0'+ mm : mm ) + ':' + (ss < 10 ? '0' + ss : ss);
    document.getElementById('counter').innerText = format;
}

function start() {
    cronometro = setInterval(() =>{ timer(); }, tempo);
    
    document.getElementById('start').style.display = 'none';  
    document.getElementById("stop").hidden=false
    document.getElementById("pause").hidden=false 
}

function pause() {
    clearInterval(cronometro);
    document.getElementById('start').style.display = '';  
    document.getElementById("pause").hidden=true  
}

function stop() {
    clearInterval(cronometro);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
    document.getElementById('start').style.display = '';   
    document.getElementById("pause").hidden=true  
    document.getElementById("stop").hidden=true
}