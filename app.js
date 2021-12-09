let dino = document.getElementsByClassName("dino")[0];
let cactus = document.getElementsByClassName("cactus")[0];

document.addEventListener("keydown",(e)=>{
    jump()
});
function jump(){
    if(!dino.classList.contains("jump")){
        dino.classList.add("jump");
    }
    setTimeout(()=>{
        dino.classList.remove("jump");
    },1000)
}
setInterval(() => {
    let dinoBottom = parseInt(window.getComputedStyle(dino).bottom);
    let cactusLeft = parseInt(window.getComputedStyle(cactus).left);
    if(cactusLeft >= 0 && cactusLeft <= 50 && dinoBottom <= 0){
        console.log(dinoBottom)
        alert("gameover!F5");
    }
}, 20);