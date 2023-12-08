//ScrollToTop

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

document.addEventListener("DOMContentLoaded", function() {
    const layer = document.querySelector('.hero__img');
    document.addEventListener('mousemove', (event) => {
    layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 4) + 'px,' + ((event.clientY * 0.4) / 6) + 'px, 0px)';
    })
});

document.addEventListener("DOMContentLoaded", function() {
    let layer = document.querySelector('.payment__left-block--img');
    document.addEventListener('mousemove', (event) => {
      layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 4) + 'px,' + ((event.clientY * 0.4) / 6) + 'px, 0px)';
    })
})

// menu button

const burger = document.querySelector('.header__burger-btn');
const link = document.querySelectorAll('.menu-link');
const mobMenu = document.querySelector('.menu-list');


burger.addEventListener('click', () => {
  document.querySelector('.menu-list').classList.toggle('active')
});

link.forEach(function(item) {
  item.addEventListener('click', function() {
    document.querySelector('.menu-list').classList.remove('active')
  })
})