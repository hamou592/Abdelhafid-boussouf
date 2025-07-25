gsap.to(".first", 1.5, {delay: .5, top: "-100%", ease: Expo.easeInOut});
gsap.to(".second", 1.5, {delay: .7, top: "-100%", ease: Expo.easeInOut});
gsap.to(".third", 1.5, {delay: .9, top: "-100%", ease: Expo.easeInOut});

//animation of the descriptions section
window.addEventListener("scroll",() => {
    if(window.scrollY >  107.5999984741211){
        document.querySelector(".desc1").style.opacity= "1";
    }
    else{
        document.querySelector(".desc1").style.opacity= "0";
    }
})


window.addEventListener("scroll",() => {
    if(window.scrollY >  608.800048828125){
        document.querySelector(".desc2").style.opacity= "1";
    }
    else{
        document.querySelector(".desc2").style.opacity= "0";
    }
})

window.addEventListener("scroll",() => {
    if(window.scrollY >  1572.0009765625){
        document.querySelector(".desc12").style.opacity= "1";
    }
    else{
        document.querySelector(".desc12").style.opacity= "0";
    }
})


window.addEventListener("scroll",() => {
    if(window.scrollY >  2002.799560546875){
        document.querySelector(".desc22").style.opacity= "1";
    }
    else{
        document.querySelector(".desc22").style.opacity= "0";
    }
})