let parent = document.querySelector('.options-tabs__nav-wrapper');
let current = parent.querySelector('.select__current');

parent.querySelectorAll('.select__item').forEach(el => {
    if (current.innerHTML === el.innerHTML) {
        parent.querySelectorAll('.select__item').forEach(el => {
            el.classList.remove('_hide');
        });

        el.classList.add('_hide');
    }
})

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('navigation-tab')) {
        document.querySelectorAll('.navigation-tab').forEach((el) => {
            el.classList.remove('navigation-tab_current');
        });
        
        e.target.classList.add('navigation-tab_current');


        let tabs = [...document.querySelectorAll('.navigation-tab')]
        let elPos = tabs.indexOf(e.target);

        document.querySelectorAll('.options-content__section').forEach((el) => {
            el.classList.remove('options-content__section_showed');
        });

        let contentSections = document.querySelectorAll('.options-content__section');
        contentSections[elPos].classList.add('options-content__section_showed');

        let items = document.querySelector('.tabs-select').querySelectorAll('.select__item');
        document.querySelector('.tabs-select').querySelector('.select__current').innerText = items[elPos].innerText;

        let parent = e.target.closest('.options-tabs__nav-wrapper');
        let current = parent.querySelector('.select__current');
        
        parent.querySelectorAll('.select__item').forEach(el => {
            if (current.innerHTML === el.innerHTML) {
                parent.querySelectorAll('.select__item').forEach(el => {
                    el.classList.remove('_hide');
                });

                el.classList.add('_hide');
            }
        })
    }

    if (e.target.classList.contains('select__item') && e.target.closest('.tabs-select')) {
        let parent = e.target.closest('.tabs-select');

        let tabs = [...parent.querySelectorAll('.select__item')]
        let elPos = tabs.indexOf(e.target);

        document.querySelectorAll('.options-content__section').forEach((el) => {
            el.classList.remove('options-content__section_showed');
        });

        let contentSections = document.querySelectorAll('.options-content__section');
        contentSections[elPos].classList.add('options-content__section_showed');

        document.querySelectorAll('.navigation-tab').forEach((el) => {
            el.classList.remove('navigation-tab_current');
        });
        document.querySelectorAll('.navigation-tab')[elPos].classList.add('navigation-tab_current');
    }
})