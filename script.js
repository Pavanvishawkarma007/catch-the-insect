var screen = document.querySelectorAll(".screen")
var startBtn = document.querySelector("button")
var allElems = document.querySelectorAll(".elem")
var playGround = document.querySelector(".playground")
var selected = ""

startBtn.addEventListener("click", function(){
    screen[1].style.transform = "translateY(-100%)"
})
allElems.forEach(function(elem){
    elem.addEventListener("click", function(){
        screen[2].style.transform = "translateY(-200%)"
    })
})
allElems.forEach(function(elem){
    elem.addEventListener("click", function() {
       selected =  elem.childNodes[3].getAttribute("src")
       var newImg = document.createElement("img")
        newImg.setAttribute("src", selected)
        var x = Math.random()*100
        var y = Math.random()*100
        newImg.style.left = x+"%"
        newImg.style.top = y+"%"
        playGround.appendChild(newImg)

    })
})