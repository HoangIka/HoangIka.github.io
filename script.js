const map = [{img: "image1.jpeg", audio:"scares1.mp3",},
             {img:"image2.jpeg",audio:"scares2.mp3",}
];

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
    
    audio.load();
    audio.play().then(() => {
        console.log("Audio playing automatically");
    }).catch(error => {
        console.log("Error occurred during audio playback:", error);
    });
}

function active(){
    console.log("actived!");
    
    const contain = document.querySelector(".container");
    let img = document.createElement("img");
    let audio = document.createElement("audio");
    
    const choose = randomized(2);
    
    setupImg(img,choose);
    setupAudio(audio,choose);
    
    document.body.insertBefore(img,contain);
    document.body.insertBefore(audio,contain);
}

let count = 20, counter = true;

function time(){
        setInterval(()=>{
            if(!counter){
                return;
            }
            let timer = document.querySelector(".timer");
            --count;
            /*console.log(count);*/
            if(count<=10){
                timer.style.display = "inline";
                timer.innerText = count + "s";
                
                if(count<0){
                    active();
                    counter = false;
                }
            }
        },1000);
}
time();