// add functionality to web page
function main() {
    const scenes = document.querySelectorAll('.scene');
    for (const scene of scenes) {
        scene.addEventListener('mouseenter', showCat);
        scene.addEventListener('mouseleave', hideCat);
    }
}

// function to call on mouse over a scene - shows this scene's cat
function showCat(evt) {
    const cat = evt.target.querySelector('.cat');
    cat.classList.remove('invisible');
}

// function to call on mouse leaving a scene - hide's this scene's cat
function hideCat(evt) {
    const cat = evt.target.querySelector('.cat');
    cat.classList.add('invisible');
}

// only call main line of execution when page content is finished loading
document.addEventListener('DOMContentLoaded', main);