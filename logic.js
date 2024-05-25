
window.addEventListener("DOMContentLoaded",function(){
    function crossAndHamburger() {
        let nav = document.querySelector("nav");
        let cross = document.getElementById("cross");
        let btn = document.querySelector("#btn");
    
    
        if (cross) {
    
            cross.addEventListener("click", function () {
                nav.classList.add("disp2") ;
    
            })
        }
        // nav.style.visibility = "visible"
    
    
    
        if (btn) {
    
    
            btn.addEventListener("click", function () {
                nav.classList.remove("disp2")    
                nav.classList.toggle("disp") 
                // nav.classList.toggle("disp2")
            })
    
        }
    }
    crossAndHamburger();
})





function typingEffect() {
    let profession = document.querySelector("#profession");

    let works = ["Web-Development", "Web Designing", "C-Programming", "Git and GitHub"];


    let i = 0;
    let ch = 0;

    setInterval(function () {

        profession.innerHTML = `${works[i].slice(0, ch)}|`;
        if (ch == (works[i].length + 1)) {
            ch = 0;
            i++;
            if (i == works.length) {
                i = 0;
            }
        }
        ch++;

    }, 100)
}
typingEffect();


let navbar = document.querySelector("nav");

let sidebar = document.querySelector("#sidebar")
let navy = document.querySelector("#navbar")


window.addEventListener("scroll", function () {

    // this.alert("People")

    // navbar.style.display ="none";
    navy.style.opacity = "1";


    // this.setTimeout(function(){
    // navy.style.opacity="0";
    // },1000)

    this.addEventListener("scroll", function (dets) {
        let value = this.scrollY;

        // console.log(this.scrollY)


    })

})






