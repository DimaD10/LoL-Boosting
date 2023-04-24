if (document.querySelectorAll('.rank')) {
    let parent = document.querySelectorAll('.rank');

    parent.forEach(el => {
        let image = el.querySelector('.rank__icon_current').innerHTML;

        if (el.classList.contains('rank_first')) {
            document.querySelector('.calculate-result__box_first').innerHTML = image;
        } else if (el.classList.contains('rank_second')) {
            document.querySelector('.calculate-result__box_second').innerHTML = image;
        }
    })
}

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

        if (e.target.closest('.calculator__body') && e.target.closest('.rank-nav')) {
            let position = e.target.closest('.rank');

            let items = [...position.querySelectorAll('.select__item')];
            let elPos = items.indexOf(e.target);

            showPreview(elPos, position);
            changeIcon(position);
        }

        if (e.target.closest('.tabs-select')) {
            let parent = e.target.closest('.tabs-select');
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
    });
})

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('rank-nav__btn')) {
        let currentRank = e.target.closest('.rank-nav').querySelector('.select__current');
        let items = e.target.closest('.rank-nav').querySelectorAll('.select__item');
        let step;

        for (let i = 0; i < items.length; i++) {
            const el = items[i];
            
            if (currentRank.textContent === el.textContent) {
                if (e.target.classList.contains('rank-nav__btn_next')) {
                    if (i + 1 === items.length) {
                        step = 0;
                    } else {
                        step = i + 1;
                    }
                } else if (e.target.classList.contains('rank-nav__btn_prev')) {
                    if (i === 0) {
                        step = items.length - 1;
                    } else {
                        step = i - 1;
                    }
                }
            }
        }

        currentRank.innerHTML = items[step].innerHTML;

        let position = e.target.closest('.rank');

        showPreview(step, position);
        changeIcon(position);
    }
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

function showPreview(index, parent) {
    let icons = parent.querySelectorAll('.rank__icon');
    icons.forEach((el) => {
        el.classList.remove('rank__icon_current');
    });

    icons[index].classList.add('rank__icon_current');
}

function changeIcon(parent) {
    let image = parent.querySelector('.rank__icon_current').innerHTML;

    if (parent.classList.contains('rank_first')) {
        document.querySelector('.calculate-result__box_first').innerHTML = image;
    } else if (parent.classList.contains('rank_second')) {
        document.querySelector('.calculate-result__box_second').innerHTML = image;
    }
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.select')) {
        document.querySelectorAll(".select").forEach((el) => {
            el.classList.remove("is-active");
        })
    }
})

