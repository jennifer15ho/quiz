/* global $ */

$(document).ready(function() {
function animal(q4Result){
    var q4Result = $("#question4").val();
    if (q4Result==="cheetah") {
        return 5;
    } else if (q4Result==="duck") {
        return 2;
    } else if  (q4Result==="any") {
        return 1;
    } else if (q4Result==="playtus") {
        return 4;
    } else if (q4Result==="dog") {
        return 3;
    } else {
        return("error");
    }
} 

function season(q2Result){
    var q2Result = $("#question2").val();
    if (q2Result==="fall"){
        return 3;
    } else if (q2Result==="summer") {
        return 5;
    } else if (q2Result==="spring") {
        return 4;
    } else if (q2Result==="winter") {
        return 2;
    } else if (q2Result==="all") {
        return 1;
    } else {
        return("error");
    }
}

function day(q1Result) {
    var q1Result = $("#question1").val();
    if (q1Result==="hanging out with friends"){
        return 5;
    } else if (q1Result==="taking bubble baths") {
        return 4;
    } else if (q1Result==="singing along to old 1980 songs") {
       return 2;
    } else if (q1Result==="staying home") {
        return 3;
    } else if (q1Result==="didn't plan") {
        return 1;
    } else {
        return("error");
    }
}
function car(q3Result){
    var q3Result = $("#question3").val();
    if (q3Result==="lamborghini") {
        return 5;
    } else if (q3Result==="doesn't matter"){
        return 1;
    } else if (q3Result==="honda") {
        return 3; 
    } else if (q3Result==="beetle") {
        return 4;
    } else if (q3Result==="toyota") {
        return 2;
    } else {
        return("error");
    }
}
var name = $("#name").val();
var totalScore = animal()+ car() + season() + day();
function chip(totalScore) {
    if (totalScore>0 && totalScore < 4) {
        return 
    }
}
var chipPlacement = "TBD";
var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
$("button").click(function() {
    
    });
});





//clancy's total score is 0-4
//sun chips total score is 5-9
//doritos total score is 10-14
//lays total score is 15-19
//cheetos total score is 20-25
