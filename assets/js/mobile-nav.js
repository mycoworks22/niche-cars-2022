const nav_container = document.querySelector('#mobile-nav-wrap');
const burger = document.querySelector('#nav-burger');
const nav = document.querySelector('#mobile-nav');
const nav_links = document.querySelectorAll('.mobile-nav-link ');
const show_burger_on = 700; //MG for the burger

const nav_transition_time = 0.5; //seconds - time for the nav to slide in
const link_animation_timeout = 300; //milliseconds,half of the desired time - delay for the nav links to slide in


const links_number = nav_links.length; // how many links in the nav
const menu_in_transition_animation_time = links_number * link_animation_timeout; //milliseconds - time during which the burger can't be clicked , equals the time all links need to slide in
let in_transition = false; // is the navigation in transition

burger.addEventListener('click',() => {

  // add transition property to the nav - adding them here so all timings can be editted from this file
  nav_container.style.transitionDuration = nav_transition_time+"s";
  nav_container.style.transitionProperty = "all";
  nav_container.style.transitionTimingFunction = "ease";

  // check if burger can be clicked
  if (in_transition == false){
    // CLOSE NAV
    if (burger.classList.contains("burger--close")) {

        // transform burger
        burger.classList.add('burger--open');
        burger.classList.remove('burger--close');

        // hide nav
        nav_container.style.transform = "translateX(100%)";

        // add scroll to the body and remove padding
        document.body.style.overflowY = "auto";
        document.body.style.paddingRight = "0px";

        //link remove the show class
        nav_links.forEach(link =>
          link.classList.remove('mobile-nav-link--show')
        );

    }
    // OPEN NAV
    else {

        //chanege the variable so the burger can not be changed while the links are transitioning
        in_transition = true;
        //change burger tyling while transition is going
        burger.style.cursor = "none";

        // transform burger
        burger.classList.remove('burger--open');
        burger.classList.add('burger--close');

        // show nav
        nav_container.style.transform = "translateX(0%)";

        // remove scroll from the body, add padding to the body that equals the width of the scrollbar - to avoid page jumping when the scroll bar disappears
        const scrollbarWidth = window.innerWidth - document.body.clientWidth;
        document.body.style.paddingRight = scrollbarWidth+"px";
        document.body.style.overflowY = "hidden";


        //link animation
        nav_links.forEach((link, i) => {
            setTimeout(() => {
                link.classList.add('mobile-nav-link--show');
            }, i * link_animation_timeout + link_animation_timeout);
        });


        setTimeout(function () {
            in_transition = false;
            burger.style.cursor = "pointer";
        }, menu_in_transition_animation_time);

    }
  }

  // remove the transition to avoid frickering when page loads etc
  setTimeout(() => {
    nav_container.style.transitionDuration = "0s";
  }, nav_transition_time);
});



