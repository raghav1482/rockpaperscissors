
    // let you=prompt("Enter R , P or S :");
    function play(){
        document.getElementById("game").style.display="block";document.getElementById("play").style.display="none";
        document.getElementById("game").classList.add("anime");
}

    var yscore=0;
    var cscore=0;
    function valueget(val){
        var cpu1=Math.floor(Math.random()*3);
        var cpu=['R','P','S'][cpu1];
        if(cpu==='R'){
        document.getElementsByClassName("cpuvalue")[0].innerHTML="Rock";
        }
        else if(cpu==='P'){
        document.getElementsByClassName("cpuvalue")[0].innerHTML="Paper";
        }
        else if(cpu==='S'){
        document.getElementsByClassName("cpuvalue")[0].innerHTML="Scissors";
        }
        var you=val;
    // document.getElementsByClassName("cpuvalue")[1].innerHTML=you;
    if(you === cpu){
        document.getElementsByClassName("result")[0].innerHTML="MATCH TIED!!" ;
        document.getElementsByClassName("result")[0].style.color="white";
    }
    else if((you==='R' && cpu==='P')||(you==='P' && cpu==='S')||(you==='S' && cpu==='R')){
        document.getElementsByClassName("result")[0].innerHTML="CPU WINS";
        document.getElementsByClassName("result")[0].style.color="red";
        cscore++;
        if(cscore>3){
            // document.getElementById("game").style.display="none";
            setTimeout(() => {
                document.getElementsByClassName("container")[0].style.display="none";
                document.getElementsByClassName("finalres")[0].style.display="block";
                document.getElementsByClassName("restart")[0].style.display="block";
                if(yscore>cscore){
                    document.getElementsByClassName("finalres")[0].innerHTML="YOU WIN";
                    document.getElementsByClassName("finalres")[0].style.color="green";
                }
                else if(yscore<cscore){
                    document.getElementsByClassName("finalres")[0].innerHTML="YOU LOOSE";
                    document.getElementsByClassName("finalres")[0].style.color="red";
                }
                else if(yscore==cscore){
                    document.getElementsByClassName("finalres")[0].innerHTML="MATCH TIED";
                    document.getElementsByClassName("finalres")[0].style.color="white";
                }
            }, 2000)
        }
        document.getElementsByClassName("cpu")[0].innerHTML=cscore;
    }
    else if((you==='R' && cpu==='S')||(you==='P' && cpu==='R')||(you==='S' && cpu==='P')){
        document.getElementsByClassName("result")[0].innerHTML="YOU WIN";
        document.getElementsByClassName("result")[0].style.color="green";
        yscore++;
        if(yscore>3){
            setTimeout(() => {
                document.getElementsByClassName("container")[0].style.display="none";
                document.getElementsByClassName("finalres")[0].style.display="block";
                document.getElementsByClassName("restart")[0].style.display="block";
                if(yscore>cscore){
                    document.getElementsByClassName("finalres")[0].innerHTML="YOU WIN";
                    document.getElementsByClassName("finalres")[0].style.color="green";
                }
                else if(yscore<cscore){
                    document.getElementsByClassName("finalres")[0].innerHTML="YOU LOOSE";
                    document.getElementsByClassName("finalres")[0].style.color="red";
                }
                else if(yscore==cscore){
                    document.getElementsByClassName("finalres")[0].innerHTML="MATCH TIED";
                    document.getElementsByClassName("finalres")[0].style.color="white";
                }
          }, 2000)
        }
        document.getElementsByClassName("user")[0].innerHTML=yscore;
    }
    setTimeout(() => {
            document.getElementsByClassName("cpuvalue")[0].innerHTML="*";
            document.getElementsByClassName("result")[0].innerHTML="";
            // document.getElementsByClassName("cpuvalue")[1].innerHTML="";
            cpu1=Math.floor(Math.random()*3);
            cpu=['R','P','S'][cpu1];
      }, 500)
}
