var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

var r = 0;
var g = 0;
var b = 0;
var selector = 1;

start();
function start() {
    window.addEventListener('load', function () {
        fontSize = (1 / (window.innerWidth * 5) * 100000) + 100;
        document.getElementById("bannerH1").style.fontSize = fontSize+"px";
        document.getElementById("bannerH2").style.width = document.getElementById("bannerH1").offsetWidth+"px";
      })
}

function resize() {
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    fontSize = (1 / (window.innerWidth * 5) * 100000) + 100;
    document.getElementById("bannerH1").style.fontSize = fontSize+"px";
    document.getElementById("bannerH2").style.width = document.getElementById("bannerH1").offsetWidth+"px";
}

resize();

draw();
setInterval(draw, 150);

function draw() {
    if (scrollPercent < 1) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var chunk = 10;
        var chunkWidth = canvas.width / chunk;
        var res = chunkWidth / 4;
        for (y= 0; y< (canvas.height) / res; y++) {
            for (x = 0; x < (canvas.width / chunk) / res; x++) {
                for (chunkX = 0; chunkX < chunk; chunkX++) {
                        r = Math.random() * 15; 
                        ctx.fillStyle = 'rgba('+r+', '+r+', '+r+', 1)';
                        ctx.fillRect((x * res) + (chunkX * chunkWidth), (y * res) , res, res);
                } 
            }
        }
    }
}

var windowHeight = window.innerHeight;
var scrollDistance = window.pageYOffset;
var scrollPercent = (scrollDistance / windowHeight) * 2;
var scrollLocation = document.getElementById("content").offsetTop - document.getElementById("nav").offsetHeight;
function scroll(){
    //landing page and nav bar
    windowHeight = window.innerHeight;
    scrollDistance = window.pageYOffset;
    scrollPercent = (scrollDistance / windowHeight) * 1.5;
    document.getElementById("black").style.opacity = scrollPercent;
    document.getElementById("nav").style.backgroundColor = "rgba(0, 0, 0, " + scrollPercent + ")";
    document.getElementById("contact").style.backgroundColor = "rgba(0, 0, 0, " + scrollPercent + ")";
    document.getElementById("arrow").style.opacity = 1 - scrollPercent;

    //paralax
    var paralax = document.getElementsByClassName("paralax");
    for(i = 0; i < paralax.length; i = i + 2) {
        var bottom = paralax[i];
        var top = paralax[i + 1];
        var paralaxDistance = bottom.getBoundingClientRect().top;
        var paralaxPercent = paralaxDistance / windowHeight * 20 - 5;
        top.style.transform = "translateY(" + paralaxPercent + "%)";
        console.log(paralaxPercent);
    }
}


//project
var slide = document.getElementsByClassName("slide");
slide[0].style.display = "block";
function changeSlide(n) {
    slideNumber = n;
    if(slideNumber == null) {
        slideNumber = 0;
    }
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    
    console.log(slideNumber);
    slide[slideNumber].style.display = "block";
}