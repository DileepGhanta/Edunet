// let page_links=document.querySelectorAll('.links')
// for(let link of page_links){
//     link.addEventListener("click",()=>{
//         page_links.forEach(lnk=> lnk.classList.remove('active-link'))
//         link.classList.add('active-link')
//     })
// }

let isScrolled = false;
let nav=document.querySelector('.nav')

const handleScroll = () => {
  if (window.scrollY > 50) {
    if (!isScrolled) {
      isScrolled = true;
      nav.classList.add('scrolled')
    }
  } else {
    if (isScrolled) {
      isScrolled = false;
      nav.classList.remove('scrolled')
    }
  }
};
window.addEventListener('scroll', handleScroll);

window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});

  