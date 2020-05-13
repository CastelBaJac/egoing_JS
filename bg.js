const body = document.querySelector("body");


const IMG_NUM = 3; 

function paintImage(imgNumber){
    const img = new Image();
    img.src = `images/${imgNumber}.jpg`;
    img.classList.add("bgImage");
    body.appendChild(img);
    
}

function genRandom(){
    const number = Math.floor(1 + (Math.random() * IMG_NUM));
    return  number;
}

function init(){
    const randomNumber= genRandom();
    paintImage(randomNumber);
}

init();