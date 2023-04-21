document.querySelector(".spoiler__header").addEventListener('click', (e) => {
    e.target.parentElement.classList.toggle("_opened");
})
document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('spoiler__header') && !e.target.closest(".spoiler")) {
        console.log("Work!");
        let spoilerHeader = document.querySelector(".spoiler__header");
        spoilerHeader.parentElement.classList.remove("_opened");
    }
})