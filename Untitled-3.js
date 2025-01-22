let currentIndex = 0;
const slides = document.querySelectorAll('.slider-item');
const sliderItems = document.querySelector('.slider-items');

function changeSlide(direction) {
    currentIndex += direction;


    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }


    const offset = -currentIndex * 1000; 
    sliderItems.style.transform = `translateX(${offset}px)`;
}
document.addEventListener('DOMContentLoaded', () => {
    const group = document.querySelector('.group');

    group.addEventListener('click', (e) => {
        const Header = e.target.closest('.header');
        if (!Header)
            return;
        const BoxReason = Header.parentElement;
        const Group = BoxReason.querySelector('.group');
        const Reason = BoxReason.querySelector('.reason');
        const icon = Header.querySelector('i');
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
        Reason.classList.toggle('open');
    });
})
