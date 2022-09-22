$(document).ready(function(){
 $(window).scroll(function(){
          // sticky navbar on scroll script
          if(this.scrollY > 20){
            $('header').addClass("sticky");
        }else{
            $('header').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.up').addClass("show");
        }else{
            $('.up').removeClass("show");
        }
 })
     // slide-up script
     $('.up').click(function(){
      $('html').animate({scrollTop: 0});
      // removing smooth scroll on slide-up button click
      $('html').css("scrollBehavior", "auto");
  });

  $('header').click(function(){
      // applying again smooth scroll on menu items click
      $('html').css("scrollBehavior", "smooth");
  });
  var typed = new Typed(".typing", {
    strings: ["freelancer", "Developer", "Web designer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  })
});
const loader = document.querySelector(".loader");
     window.onload = function () {
       setTimeout(function () {
         loader.style.opacity = "0";
         setTimeout(function () {
           loader.style.display = "none";
         }, 500);
       }, 1000);
     }

/*let span = document.querySelector(".up");

window.onscroll = function () {
  // console.log(this.scrollY);
  // if (this.scrollY >= 1000) {
  //   span.classList.add("show");
  // } else {
  //   span.classList.remove("show");
  // }
  this.scrollY >= 500 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 20);
})
*/
