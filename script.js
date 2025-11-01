function loadungAnimation(){
    
var t1 = gsap.timeline()
t1.from(".line h1",{
    y:150,
    stagger:0.4,
    duration:0.5,
    delay:0.1
});

t1.from("#line1-part1",{
    opacity:0,
    onStart:function(){
        var h5timer = document.querySelector("#line1-part1 h5")
        var count = 0;
    setInterval(function(){
    if(count < 100){
      h5timer.innerHTML = count++;
      }
    else{
        h5timer.innerHTML = count;
        }
     },35)
   }
})
t1.to(".line h2",{
    animationName:"anime",
    opacity:1
})
t1.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:3
})
t1.from("#page1",{
    y:1600,
    delay:0.2,
    opacity:1,
    duration:0.5,
    ease:Power4,
})
t1.to("#loader",{
    display:'none'
})

t1.from("#nav",{
    opacity:0
})

t1.from("#hero1 h1, #hero2 h1, #hero3 h2,#hero4 h1 ",{
    y:120,
    stragger:0.3
})

}
loadungAnimation();

function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
    gsap.to("#crscr",{
        left:dets.x,
        top:dets.y
    })
})

Shery.makeMagnet("#nav-part2 h4");
}
cursorAnimation();
