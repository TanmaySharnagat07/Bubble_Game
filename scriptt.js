var timer = 20 ;
var score = 0 ;
var rnd = 0 ;

function getNewHit(){
    rnd = Math.floor(Math.random()*10) ;
    document.querySelector("#hitval").textContent = rnd ;
}

function makebubble() {
    var clutter = ""

    for(var i = 1 ; i < 145 ; i++ ){
        var rn = Math.floor(Math.random()*10) ;
        clutter += `<div class="bubble">${rn}</div>` ;
    }
    
    document.querySelector(".pbtm").innerHTML = clutter ;
}

function runTimer(){
    var timerfunc = setInterval(function(){
        if(timer >0){
            timer -- ;
            document.querySelector("#timer").textContent = timer ;
        }
        else{
            clearInterval(timerfunc);
            document.querySelector(".pbtm").innerHTML = ` <h1>Game Over</h1> <h2>Your Score: ${score}</h2>` ;

        }
        
        
    },1000)
    
}

function incScore(){
    score += 10 ;
    document.querySelector("#scoreval").textContent = score ;
}

document.querySelector(".pbtm").
addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent) ;
    if( clickednum == rnd){
        incScore() ;
        getNewHit() ;
        makebubble() ;
    }
})


runTimer()
makebubble() ;
getNewHit() ;