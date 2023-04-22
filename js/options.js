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
    }
})