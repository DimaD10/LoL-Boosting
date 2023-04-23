
let selectHeader = document.querySelectorAll('.select__header');
let selectItem = document.querySelectorAll('.select__item');

selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)
});

selectItem.forEach(item => {
    item.addEventListener('click', (e) => {
        let text = e.target.innerHTML,
            select = e.target.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerHTML = text;
        select.classList.remove('is-active');

        if (e.target.closest('.roles')) {
            let position = e.target.closest('.roles__box');

            let items = [...position.querySelectorAll('.select__item')];
            let elPos = items.indexOf(e.target);
    
            showIcon(elPos, position);
        }

    });
})

function selectToggle() {
    this.parentElement.classList.toggle('is-active');
}

function showIcon(index, parent) {
    let icons = parent.querySelectorAll('.roles__icon');
    icons.forEach((el) => {
        el.classList.remove('roles__icon_current');
    });

    icons[index].classList.add('roles__icon_current');
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.select')) {
        document.querySelectorAll(".select").forEach((el) => {
            el.classList.remove("is-active");
        })
    }
})