var numberOfDrum=document.querySelectorAll(".drum").length;
for(var i = 0 ;i<numberOfDrum;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch (key) {
            case "a":
                var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "s":
                var tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "d":
                var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "f":
                var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var crash=new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "k":
                var kick=new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            case "l":
                var snare=new Audio("sounds/snare.mp3");
                snare.play();
                break;
            default:console.log();
        }
}

function buttonAnimation(currentKey){
    var new1=document.querySelector("."+currentKey);
    new1.classList.add("pressed");
    setTimeout(function(){
        new1.classList.remove("pressed");
    },100);
}
