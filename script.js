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

function handleSubmit(e){
  e.preventDefault();
}