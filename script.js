function biding_map(number){
    let map = [];
    for(let i=0;i<number;++i){
        let img_t = "image"+(i+1)+".jpeg";
        let audio_t = "scares"+(i+1)+".mp3";
        map.push({img:img_t, audio:audio_t,});
    }
    return map;
}

const map = biding_map(2);

var object = {};
var counter = false;

function randomized(max){
    return Math.floor(Math.random() * max);
}

/*---------------------------onclick---------------------------*/
function active(){
    console.log("actived!");
    
    
    const contain = document.querySelector(".container");
    
    document.body.insertBefore(object.img,contain);
    document.body.insertBefore(object.audio,contain);
    let play_audio = document.querySelector(".playing");
    play_audio.play();
    setInterval(()=>{window.location.replace("./index.html");}
    ,4000);
}
/*---------------------------function---------------------------*/
function setupImg(choose){
    console.log(map[choose].img);
    let obj = document.createElement("img");
    
    obj.setAttribute("src",map[choose].img);
    obj.setAttribute("type","image/jpeg image/png image/jpg");
    
    obj.classList.add("image");
    obj.classList.add("shaking");
    
    return obj;
}

function setupAudio(choose){
    console.log(map[choose].audio);
    
    let obj = document.createElement("audio");
    
    obj.setAttribute("src",map[choose].audio);
    obj.setAttribute("type","audio/mpeg");
    obj.setAttribute("controls","");
    obj.classList.add("playing");
    obj.style.display="none";
    counter = true;
    return obj;
}
/*---------------------------------------------------------------*/
let count = 60;

function time(){
    setInterval(()=>{
        
            if(!counter){
                return;
            }
            let timer = document.querySelector(".timer");
            
            timer.style.display = "inline";
            timer.innerText = count + "s";
            --count;
            if(count<0){
                active();
                counter = false;
                setInterval(()=>{window.location.replace("./index.html");}
                ,4000);
                }
        },1000);
}
function visible(){
    let part1 = document.querySelector(".partvisible");
    let part2 = document.querySelector(".parthidden")
    let bg_audio = document.querySelector(".bg-audio");
    
    bg_audio.play();
    part2.style.display = "inline";
    part1.style.display = "none";
    
    const choose = randomized(map.length);

    object.audio = setupAudio(choose);
    object.img = setupImg(choose);
}


time();
