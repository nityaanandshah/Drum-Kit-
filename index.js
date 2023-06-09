function buttonAnimation(k){
    var activebutton = document.querySelector("."+k);
    activebutton.classList.add("pressed"); 
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    }, 150);
}

function eventClick(){
    var stmnt = this.innerHTML;
    switch (stmnt) {
        case "w":
            var audw = new Audio("./sounds/crash.mp3");
            audw.play();
            break;
        case "a":
            var auda = new Audio("./sounds/kick-bass.mp3");
            auda.play();
            break;
        case "s":
            var auds = new Audio("./sounds/snare.mp3");
            auds.play();
            break;
        case "d":
            var audd = new Audio("./sounds/tom-1.mp3");
            audd.play();
            break;
        case "j":
            var audd = new Audio("./sounds/tom-2.mp3");
            audd.play();
            break;
        case "k":
            var audd = new Audio("./sounds/tom-3.mp3");
            audd.play();
            break;
        case "l":
            var audd = new Audio("./sounds/tom-4.mp3");
            audd.play();
            break;
        default:
            console.log("This was clicked"+stmnt);
            break;
    }
    buttonAnimation(stmnt);  
}

function pressKey(e){
    switch (e) {
        case "w":
            var audw = new Audio("./sounds/crash.mp3");
            audw.play();
            break;
        case "a":
            var auda = new Audio("./sounds/kick-bass.mp3");
            auda.play();
            break;
        case "s":
            var auds = new Audio("./sounds/snare.mp3");
            auds.play();
            break;
        case "d":
            var audd = new Audio("./sounds/tom-1.mp3");
            audd.play();
            break;
        case "j":
            var audd = new Audio("./sounds/tom-2.mp3");
            audd.play();
            break;
        case "k":
            var audd = new Audio("./sounds/tom-3.mp3");
            audd.play();
            break;
        case "l":
            var audd = new Audio("./sounds/tom-4.mp3");
            audd.play();
            break;
        default:
            console.log("This was clicked"+stmnt);
            break;
    }
    buttonAnimation(e);   
}

var n = document.querySelectorAll(".drum").length
for(var i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", eventClick);
}

document.addEventListener("keypress", function(event){
    pressKey(event.key);
});