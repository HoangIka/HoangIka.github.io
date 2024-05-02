const map = [{img: "image1.jpeg", audio:"scares1.mp3",},
             {img:"image2.jpeg",audio:"scares2.mp3",}
];

const contain = document.querySelector(".container");
var img = document.createElement("img");
var audio = document.createElement("audio");

/*---------------------------onclick---------------------------*/
function active(){
    console.log("actived!");
    
    /*const contain = document.querySelector(".container");
    let img = document.createElement("img");
    let audio = document.createElement("audio");
    
    const choose = randomized(2);
    
    setupImg(img,choose);
    setupAudio(audio,choose);*/
    
    document.body.insertBefore(img,contain);
    document.body.insertBefore(audio,contain);
    
    audio.load();
    audio.play().then(() => {
        console.log("Audio playing automatically");
    }).catch(error => {
        console.log("Error occurred during audio playback:", error.message);
    });
    
    setInterval(()=>{window.location.href = "./index.html";}
    ,4000);
}
/*---------------------------function---------------------------*/
function randomized(max){
    return Math.floor(Math.random() * max);
}

function setupImg(obj,choose){
    
    console.log(map[choose].img);
    obj.setAttribute("src",map[choose].img);
    obj.setAttribute("type","image/jpeg image/png image/jpg");
    obj.volume = 2;
    obj.classList.add("image");
    obj.classList.add("shaking");
}

function setupAudio(audio,choose){
    
    console.log(map[choose].audio);
    
    audio.setAttribute("src",map[choose].audio);
    audio.setAttribute("type","audio/mpeg");
    audio.setAttribute("autoplay","1");
    audio.setAttribute("controls","");
    
    audio.style.display="none";
  doing = true;
}
/*---------------------------------------------------------------*/
let count = 10, counter = true, doing = false;

function time(){
        setInterval(()=>{
            if(!counter||!doing){
                return;
            }
            let timer = document.querySelector(".timer");
            /*console.log(count);*/
            if(1){
                timer.style.display = "inline";
                timer.innerText = count + "s";
                --count;
                if(count<0){
                    document.body.insertBefore(img,contain);
    document.body.insertBefore(audio,contain);
    
    audio.load();
    audio.play().then(() => {
        console.log("Audio playing automatically");
    }).catch(error => {
        console.log("Error occurred during audio playback:", error.message);
    });
    
    setInterval(()=>{window.location.href = "./index.html";}
    ,4000);
                    counter = false;
                }
            }
        },1000);
}
function visible(){
    
    let part1 = document.querySelector("#part-visible");
    let part2 = document.querySelector("#part-hidden");
    let aud = document.querySelector("#aud");
    
    aud.play();
    part2.id = "";
    part1.style.display = "none";
    
    const choose = randomized(2);

    setupAudio(audio,choose);
    setupImg(img,choose);
}
time();
