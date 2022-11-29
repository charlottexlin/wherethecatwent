// add functionality to web page
function main() {
    const bgs = document.querySelectorAll('.background');
    for (const bg of bgs) {
        bg.addEventListener('mouseenter', showCat);
        bg.addEventListener('mouseleave', hideCat);
    }
}

// function to call on mouse over a background - shows this background's cat
function showCat(evt) {
    const cat = evt.target.querySelector('.cat');
    cat.classList.remove('invisible');
}

// function to call on mouse leaving a background - hide's this background's cat
function hideCat(evt) {
    const cat = evt.target.querySelector('.cat');
    cat.classList.add('invisible');
}

// only call main line of execution when page content is finished loading
document.addEventListener('DOMContentLoaded', main);