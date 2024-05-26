
window.addEventListener("DOMContentLoaded", function () {
    function crossAndHamburger() {
        let nav = document.querySelector("nav");
        let cross = document.getElementById("cross");
        let btn = document.querySelector("#btn");


        if (cross) {

            cross.addEventListener("click", function () {
                nav.classList.add("disp2");

            })
        }
        // nav.style.visibility = "visible"



        if (btn) {

            let ct = 0;

            btn.addEventListener("click", function () {
                if (ct == 0) {
                    nav.classList.add("disp")
                    ct = 1;
                }
                else {
                    // nav.classList.add("navAnimate")
                    
                    nav.classList.remove("disp")
                    nav.classList.remove("disp2");
                    ct = 0;
                }
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

    }, 200)
}
typingEffect();


let navy = document.querySelector("#navbar")



let scrollBack = 0;
window.addEventListener("scroll", function (dets) {

    let scrollCurrent = this.scrollY;
    if (scrollCurrent > scrollBack) {
        navy.style.display = "none"

    }
    else {
        // console.log("scroll up");
        navy.style.display = "flex"
    }

    scrollBack = scrollCurrent;

})






