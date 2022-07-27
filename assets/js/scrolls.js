// Initialize the AOS scroll animation library
AOS.init();


// SCROLL TO BTNS
const home_header_btn = document.querySelector('#header-scroll-down-btn');
const header_booking_btn = document.querySelector('#header-booking-btn');
// SCROLL TO TARGET SECTIONS
const home_about_section = document.querySelector('#about-niche');
const home_contact_section = document.querySelector('#contact-us-section');
// SCROLL TO FUNCTION
function scrollFunction(btn, target) {
  btn.addEventListener('click',() => {
    // scroll top value
    let distance_to_scroll = target.getBoundingClientRect().top + window.pageYOffset;

    // window scroll
    setTimeout(() => {
      window.scrollTo({
        top: distance_to_scroll,
        left: 0,
        behavior: 'smooth'
      });
    }, 1);

  });
}
scrollFunction(home_header_btn, home_about_section);
scrollFunction(header_booking_btn, home_contact_section);


// SCROLL TO TOP BTN
const scroll_to_top_btn = document.querySelector('#scroll-to-top-btn');
scroll_to_top_btn.addEventListener('click',() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

// on scroll - hide or show the scroll to top btn
window.addEventListener('scroll',() => {
  let scroll_value = window.pageYOffset;

  if(scroll_value >= 400){
    scroll_to_top_btn.classList.remove('d-none');
    scroll_to_top_btn.classList.add('d-flex');
  }
  else if(scroll_value < 400){
    scroll_to_top_btn.classList.add('d-none');
    scroll_to_top_btn.classList.remove('d-flex');
  }
});

