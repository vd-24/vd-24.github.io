let hamburger = document.getElementById("hamburger");
let xmark = document.getElementById("xmark");
let portfolioLogo = document.getElementById("portfolio-log");
let navLink = document.querySelectorAll("nav-link");
let navmenu = document.getElementById("nav-menu");
let navLinkContainer = document.getElementById("nav-links-container");
let container=document.getElementById("container");
let home = document.getElementById("home");

hamburger.addEventListener("click",()=>{
    container.style.display="block";
    hamburger.style.display="none";
    xmark.style.display="block";
    disableScroll();
    // home.style.visibility="hidden";
    // home.style.display="none";

})

xmark.addEventListener("click",()=>{
    hamburger.style.display="block";
    xmark.style.display="none";
    container.style.display="none";
    enableScroll();
  })
  


  var x = window.matchMedia("(min-width: 912px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

  function myFunction(x) {
    if (x.matches) { // If media query matches
        hamburger.style.display="none";
        xmark.style.display="none";
        container.style.display="block";
    } else {
        container.style.display="none";
        hamburger.style.display="block";

    }
  }


  function disableScroll() {
    // Get the current page scroll position
    scrollTop =
    window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft =
    window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
  
function enableScroll() {
    window.onscroll = function() {};
}




    // typing text animation script
    var typed = new Typed(".typing", {
      strings: ["Java Back-End Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });
  // var typed = new Typed(".typing-3", {
  //     strings: ["Connect with me on :)"],
  //     typeSpeed: 100,
  //     backSpeed: 60,
  //     loop: true
  // });

  // var typed = new Typed(".typing-2", {
  //     strings: ["Front end developer","Fresher" ,"Technician", "Blogger", "Designer", "Freelancer","Manager"],
  //     typeSpeed: 100,
  //     backSpeed: 60,
  //     loop: true
  // });
let sticky = navmenu.offsetTop;
window.addEventListener("scroll",()=>{
  var scroll = window.pageYOffset;
  console.log(scroll);
  if(scroll>=sticky+8){
    navmenu.classList.add("colors");
  }else{
    navmenu.classList.remove("colors")
  }
})