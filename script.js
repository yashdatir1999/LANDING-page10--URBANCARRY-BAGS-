var mainbag = document.querySelector(".bag-img")
var first = document.querySelector(".bag-side1")
var second = document.querySelector(".bag-side2")
var third = document.querySelector(".bag-side3")
var fourth = document.querySelector(".bag-side4")

first.addEventListener("click",function(){
    mainbag.style.backgroundImage=`url(bag2.png)`
})
second.addEventListener("click",function(){
    mainbag.style.backgroundImage=`url(bag3.png)`
})
third.addEventListener("click",function(){
    mainbag.style.backgroundImage=`url(bag4.png)`
})
fourth.addEventListener("click",function(){
    mainbag.style.backgroundImage=`url(mainbag.png)`
})