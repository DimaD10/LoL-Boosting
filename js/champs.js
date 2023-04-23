const icons = document.querySelector('.popup-champ__list').querySelectorAll('.champions__icon');
const popup = document.querySelector('.popup-champ');

document.querySelector('.champions__add-button').addEventListener('click', e => {
    openPopup();

    popup.addEventListener('click', e => {
        if (!e.target.classList.contains(".popup-champ__wrapper") && !e.target.closest('.popup-champ__wrapper')) {
            closePopup();
            rmIcon(iconsAdded);
        }
    })
    document.addEventListener('keydown', function(event) {
        if (popup.classList.contains('opened')) {
            if (event.key == 'Escape') {
                closePopup();
                rmIcon(iconsAdded);
            }
        }
    });
})

popup.querySelector('.close-btn').addEventListener('click', e => {
    closePopup();
    rmIcon(iconsAdded);
})

window.onload = () => {
    addIcons();
}

document.querySelector('.popup-champ__confirm').addEventListener('click', e => {
    let listIcons = document.querySelector('.champions__list');
    let iconsAdded = listIcons.querySelectorAll('.champions__icon');
    iconsAdded.forEach(el => {
        el.remove(); 
    })

    addIcons();


    closePopup();
})

document.addEventListener('click', e => {
    if (e.target.classList.contains('champions__icon') && e.target.closest('.popup-champ__list')) {
        e.target.classList.toggle('_current');
    }
})


function addIcons() {
    document.querySelector('.popup-champ__list').querySelectorAll('.champions__icon').forEach(el => {
        let clone = el.cloneNode(true);

        document.querySelector('.general-champ-list').appendChild(clone);
    })

    let listIcons = document.querySelector('.champions__list');
    let iconsAdded = listIcons.querySelectorAll('.champions__icon');
    let generalList = listIcons.querySelectorAll('.champions__icon');
    document.querySelector('.champions__add-button').style.order = generalList.length++;

    rmIcon(iconsAdded);
}

function rmIcon(iconsAdded) {
    iconsAdded.forEach(el => {
        el.addEventListener('click', e => {
            el.classList.remove('_current');

            document.querySelector('.popup-champ__list').querySelectorAll('.champions__icon').forEach(el => {
                el.remove(); 
            })
            document.querySelector('.champions__list').querySelectorAll('.champions__icon').forEach(el => {
                let clone = el.cloneNode(true);
        
                document.querySelector('.popup-champ__list-wrapper').appendChild(clone);
            })
        })
    })
}

function openPopup() {
    popup.classList.add('opened');
    document.querySelector("body").style.overflow = "hidden";
}
function closePopup() {
    popup.classList.remove('opened');
    document.querySelector("body").style.overflow = "visible";

    document.querySelector('.popup-champ__list').querySelectorAll('.champions__icon').forEach(el => {
        el.remove(); 
    })
    document.querySelector('.champions__list').querySelectorAll('.champions__icon').forEach(el => {
        let clone = el.cloneNode(true);

        document.querySelector('.popup-champ__list-wrapper').appendChild(clone);
    })
}