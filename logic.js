
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

function navbarShowOnScrollUp()
{
let navy = document.querySelector("#navbar")
let scrollBack = 0;
window.addEventListener("scroll", function (dets) {

    let scrollCurrent = this.scrollY;
    if (scrollCurrent > scrollBack) {
        navy.style.display = "none"

    }
    else {
    ;
        navy.style.display = "flex"
    }

    scrollBack = scrollCurrent;

})

}

function circularloader(){
let loader = document.querySelector(".loader");


window.addEventListener("DOMContentLoaded", function () {
    loader.classList.add("not-show")
    
})
}


//bg on scroll

let item = document.querySelectorAll(".item");


window.addEventListener("scroll",function(dets){
    let var3 = this.scrollY;
    console.log(var3)
    // if((var3>0) && (var3<532))
    //     {

    //         item[0].classList.add("active");
    //     }
    // else if((var3>532) && (var3<1050))
    //     {

    //         item[2].classList.add("active");
    //     }
    // else
    //     {

    //         !item[3].classList.add("active");
    //     }
})





// client's work showcase
function workShowCase(){

    const worksList = document.querySelectorAll(".worksList");
    let works = document.querySelector("#works");
    
    works.addEventListener("wheel",function(event){
        event.preventDefault();
        this.scrollLeft += event.deltaY;
    })

let slider = document.querySelectorAll("#slider");

let click = document.querySelectorAll(".click")
let img1 = [
    { name: "PLFarm1", src: "./img/plFarm (1).png" },
    { name: "PLFarm1", src: "./img/plFarm (2).png" },
    { name: "PLFarm1", src: "./img/plFarm (3).png" }
]
let img2 = [{ name: "PLFarm1", src: "./img/kg (1).png" },
{ name: "PLFarm1", src: "./img/kg (2).png" },
{ name: "PLFarm1", src: "./img/kg (3).png" }
]
let img3 = [{ name: "PLFarm1", src: "./img/cd (1).png" },
{ name: "PLFarm1", src: "./img/cd (2).png" },
{ name: "PLFarm1", src: "./img/cd (4).png" },
{ name: "PLFarm1", src: "./img/cd (5).png" },
{ name: "PLFarm1", src: "./img/cd (6).png" }
]

function clientWebsite( limiter,k,imgNo) {

    for (let i = 0; i < limiter; i++) {
        // console.log("hello")
        let div = document.createElement("div");
        div.setAttribute("id", `${i}`)
        click[k].appendChild(div)
        div.classList.add("changer")
        // div.innerText = `${i}`
// let circle = document.querySelectorAll("div");
        function change() {
            div.addEventListener("click", function () {
                let cr = this.getAttribute("id");
                // this.classList.toggle("red");
                slider[k].innerHTML = ` <a href="${imgNo[cr].src}" target="_blank"><img class="imgage" src="${imgNo[cr].src}" alt=""></a>`
                let img = document.querySelector(".imgage");
                img.classList.add("animeBro")
                // if(circle[cr])



            })
        }
        // div.style.backgroundColor = "black";
        change();
    }
}
clientWebsite(3,1,img1);
clientWebsite(3,2,img2);
clientWebsite(6,0,img3);
}



//mouse pointer
function customMousePointer(){


let mousePointer = document.querySelector("#mousePointer")
window.addEventListener("mousedown", function () {
    mousePointer.style.width = "80px"
    mousePointer.style.height = "80px"
    mousePointer.style.opacity = "0.4"

})
window.addEventListener("mousemove", function (dets) {
    mousePointer.style.width = "20px"
    mousePointer.style.height = "20px"
    let mouseX = dets.pageX + "px";
    let mouseY = dets.pageY + "px";
    mousePointer.style.opacity = "0.8"
    mousePointer.style.top = mouseY;
    mousePointer.style.left = mouseX;
    // console.log(mouseX,mouseY)

})

}


//onGoingBiro
function customMousePointerCustomize(){
    let pointerCustom = document.querySelector(".mouseP");
    let mousePointer = document.querySelector("#mousePointer")


   let footerScIcons= document.querySelector("#footerScIcons");
   footerScIcons.addEventListener("mouseenter",function(){
   mousePointer.classList.add("mini")

   })
   footerScIcons.addEventListener("mouseleave",function(){
    mousePointer.style.backgroundColor = "white";
    mousePointer.style.width = "50px";
    mousePointer.style.height = "50px";
   })
}



//scrolling animation
function onViewPortComeAction()
{
document.addEventListener("DOMContentLoaded", function() {

function persona( btnClass,sectionToBeSelected){
// let btnClass = ".work";
// let sectionToBeSelected = "#work";
    
    const footer = document.querySelector(sectionToBeSelected);
    const workBtn = document.querySelector(btnClass);
    const active = document.querySelector(".active2");
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the footer is visible
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the expanded class to trigger the width transition
        //   footer.classList.add('view');
        workBtn.classList.add("active2");
          console.log("target view comes into viewport")
          // Optionally stop observing after the action is performed
        //   observer.unobserve(entry.target);
        }
        else{
        workBtn.classList.remove("active2");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(footer);

}
persona(".work","#works")
persona(".about","#about")
persona(".contact","#ContactPage")
persona(".intro","#profileSection")

  });
}

customMousePointerCustomize();


circularloader();
navbarShowOnScrollUp();
workShowCase();
customMousePointer();
// typingEffect();
