const inputValue = document.querySelector(".calculator-range__value");
const range = document.querySelector(".range__input");
const rangeProgress = document.querySelector(".range__line");

valPercent = ((range.value - range.min) / (range.max - range.min)) * 100;
rangeProgress.style.background = `linear-gradient(to right, #53228D ${valPercent}%, #BFBFBF ${valPercent}%)`;

range.oninput = (() => {
    let value = range.value;
    inputValue.value = `${value}`;

    valPercent = ((range.value - range.min) / (range.max - range.min)) * 100;
    rangeProgress.style.background = `linear-gradient(to right, #53228D ${valPercent}%, #BFBFBF ${valPercent}%)`;
});

inputValue.oninput = (() => {
    let value = inputValue.value;
    range.value = `${value}`;

    valPercent = ((range.value - 1) / (range.max - 1)) * 100;
    rangeProgress.style.background = `linear-gradient(to right, #53228D ${valPercent}%, #BFBFBF ${valPercent}%)`;   
});


inputValue.onblur = (() => {
    let value = range.value;
    inputValue.value = `${value}`;

    valPercent = ((range.value - range.min) / (range.max - range.min)) * 100;
    rangeProgress.style.background = `linear-gradient(to right, #53228D ${valPercent}%, #BFBFBF ${valPercent}%)`;
});