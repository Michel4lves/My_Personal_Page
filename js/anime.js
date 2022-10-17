// Lib Lodash
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
    const context = this;
    const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
    };
};

var content = document.querySelector('.portfolio')
let target = document.querySelectorAll('[data-anime]')
var telaAlto = ((window.innerHeight * 2) / 3)
var telaBaixo = ((window.innerHeight * 3) / 5)

function animeScroll() {
    let windowTop = content.scrollTop - telaAlto
    let windowBottom = content.scrollTop + telaBaixo
    target.forEach(function(element) {
        if ((windowBottom > element.offsetTop) && (windowTop < element.offsetTop)) {
            element.classList.add('animate')
        }else{
            element.classList.remove('animate')
        }
    })
}

if (target.length) {
    content.addEventListener('scroll',debounce(function() {
        animeScroll()
        let card1 = document.querySelector('.card1')
        if (card1 != null) {
            card1.classList.remove('card1')
        }
    }, 100))
}
