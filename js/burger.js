document.querySelector('.burger').addEventListener('click', (e) => {
    document.querySelector('.header-navigation').classList.toggle('_opened');
    e.target.classList.toggle("active");

    if (document.querySelector('.burger').classList.contains('active')) {
        document.querySelector('body').style.overflow = 'hidden';
    } else {
        document.querySelector('body').style.overflow = 'visible';
    }
})