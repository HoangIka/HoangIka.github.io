function biding_map(obj1,obj2,number){
    let map = [];
    for(let i=0;i<number;++i){
        let img_t = obj1+(i+1)+".jpeg";
        let audio_t = obj2+(i+1)+".mp3";
        map.push({img:img_t, audio:audio_t,});
    }
    return map;
}
const source = "./";
const map = biding_map(source+"image",source+"scares",2);

var object = {};
var counting = false;
var duration;

function audio_duration(){
    let t = (duration*1000);
    console.log(t);
    return t;
}

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
    
    play_audio.load();
    play_audio.play();
    
    setInterval(()=>{window.location.href="./index.html";}
    ,audio_duration());
}
/*---------------------------function---------------------------*/
function setupImg(choose){
    console.log(map[choose].img);
    let obj = document.createElement("img");
    
    obj.setAttribute("src",map[choose].img);
    obj.setAttribute("type","image/jpeg image/png image/jpg");
    
    obj.classList.add("image");
    obj.classList.add("shaking");
    obj.setAttribute("onclick","selfURL();");
    
    return obj;
}

function setupAudio(choose){
    console.log(map[choose].audio);
    
    let obj = document.createElement("audio");
    let source = document.createElement("source");
    
    source.setAttribute("src",map[choose].audio);
    source.setAttribute("preload","auto");
    obj.setAttribute("type","audio/mpeg");
    obj.setAttribute("controls","");
    obj.classList.add("playing");
    obj.appendChild(source);
    temp = obj;
    temp.setAttribute("muted","true");
    
    temp.addEventListener("loadedmetadata", (event)=>{
        duration = temp.duration;
    });
    counting = true;
    return obj;
}
/*---------------------------------------------------------------*/

let countdown = 60;

function time(){
    setInterval(()=>{
        
            if(!counting){
                return;
            }
            let timer = document.querySelector(".timer");
            
            timer.style.display = "inline";
            timer.innerText = countdown + "s";
            --countdown;
            if(countdown<0){
                active();
                counting = false;
                setInterval(()=>{selfURL();
                    console.log("Duration:",audio_duration());
                }
                ,audio_duration());
                }
        },1000);
}
function visible(){
    let part1 = document.querySelector(".partvisible");
    let part2 = document.querySelector(".parthidden");
    let bg_audio = document.querySelector(".bg-audio");
    
    bg_audio.play();
    part2.style.display = "flex";
    part1.style.display = "none";
    
    const choose = randomized(map.length);

    object.audio = setupAudio(choose);
    object.img = setupImg(choose);
}

function selfURL(){
    window.location.href="./index.html";
}

time();