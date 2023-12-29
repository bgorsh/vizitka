// ScrollToTop

const scrollBtn = document.querySelector('.scrollBtn');

window.onscroll = () => {
    if (window.scrollY > 600) {
        scrollBtn.classList.remove('scrollBtn_hide');
    } else if (window.scrollY < 600) {
        scrollBtn.classList.add('scrollBtn_hide');
    }
};

scrollBtn.onclick = () => {
    window.scrollTo(0, 0);
};

// Parallax photo on mosemove in hero section

document.addEventListener("DOMContentLoaded", function() {
    const layer = document.querySelector('.hero-photo');
    document.addEventListener('mousemove', (event) => {
    layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 4) + 'px,' + ((event.clientY * 0.4) / 6) + 'px, 0px)';
    })
});

// menu button

const burger = document.querySelector('.header__burger-btn');
const link = document.querySelectorAll('.menu-link');
const mobMenu = document.querySelector('.menu-list');
const hero = document.querySelector('.hero');


burger.addEventListener('click', () => {
  mobMenu.classList.toggle('active')
});

hero.onclick = function() {
  if(mobMenu.classList.contains('active')) {
    mobMenu.classList.remove('active')
  }
};

link.forEach(function(item) {
  item.addEventListener('click', function() {
    mobMenu.classList.remove('active')
  })
})