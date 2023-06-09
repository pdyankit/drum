var n = document.querySelectorAll(".drum").length
for(let i = 0 ;i < n;i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        var buttonInnerHtml = this.innerHTML
        makesound(buttonInnerHtml);
        buttonanimation(buttonInnerHtml)
    })
}
document.addEventListener("keypress",function(event) {
    makesound(event.key)
   buttonanimation(event.key)
});
function makesound(key) {
    switch(key) {
        case "w":
            var vedio = new Audio("crash.mp3")
            vedio.play();
        break;
        case "a":
            var vedio = new Audio("kick-bass.mp3")
            vedio.play();
        break;
        case "s":
            var vedio = new Audio("snare.mp3")
            vedio.play();
        break;
        case "d":
            var vedio = new Audio("tom-1.mp3")
            vedio.play();
        break;
        case "j":
            var vedio = new Audio("tom-2.mp3")
            vedio.play();
        break;
        case "k":
            var vedio = new Audio("tom-3.mp3")
            vedio.play();
        break;
        case "l":
            var vedio = new Audio("tom-4.mp3")
            vedio.play();
        break;


        default: console.log(key)
    }
}
//  var audio = new Audio("crash.mp3")
//  audio.play();
function buttonanimation(currentkey) {
      var h = document.querySelector("."+currentkey)
      h.classList.add("pressed")
      
      setTimeout(function() {
        h.classList.remove("pressed")
      }, 100);
}
 

