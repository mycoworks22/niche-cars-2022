// BTNS
const home_header_btn = document.querySelector('#header-scroll-down-btn');
const home_about_section = document.querySelector('#about-niche');


home_header_btn.addEventListener('click',() => {
  // scroll top value
  let distance_to_scroll = window.pageYOffset + home_about_section.getBoundingClientRect().top;

  // window scroll
  window.scrollTo({
    top: distance_to_scroll,
    left: 0,
    behavior: 'smooth'
  });
});