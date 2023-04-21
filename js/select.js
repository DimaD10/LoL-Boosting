
let selectHeader = document.querySelectorAll('.select__header');
let selectItem = document.querySelectorAll('.select__item');

selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)
});

selectItem.forEach(item => {
    item.addEventListener('click', selectChoose)
});

function selectToggle() {
    this.parentElement.classList.toggle('is-active');
    this.closest('.header-main-actions__el_select').classList.toggle("_active");
}

function selectChoose() {
    let text = this.innerHTML,
        select = this.closest('.select'),
        icon = this.closest('.header-main-actions__el_select'),
        currentText = select.querySelector('.select__current');
    currentText.innerHTML = text;
    select.classList.remove('is-active');
    icon.classList.remove("_active");
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.select')) {
        document.querySelectorAll(".select").forEach((el) => {
            el.classList.remove("is-active");
        })
    }
})