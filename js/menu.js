
function menu() {
    let menu = document.querySelector('.menu')
    menu.classList.toggle('active')
    let menuActive = document.querySelector('.active')
    var position = window.pageYOffset
    menuActive.style.top = position + 'px'
}

function menuPosition() {
    let menuActive = document.querySelector('.active')
    var position = window.pageYOffset
    menuActive.style.top = position + 'px'
}

function exitMenu() {
    let menu = document.querySelector('.menu')
    menu.classList.remove('active')
    menu.style.top = '-100%'
}

function linkHome() {
    let body = document.querySelector('body')
    let menu = document.querySelector('.menu')
    let about = document.querySelector('#about')
    menu.classList.remove('active')
    body.style.overflow = 'hidden'
    about.style.left = '100%'
    menu.style.top = '-100%'
}

function linkAbout() {
    let body = document.querySelector('body')
    let menu = document.querySelector('.menu')
    let about = document.querySelector('#about')
    menu.classList.remove('active')
    body.style.overflow = 'visible'
    about.style.left = '0'
    menu.style.top = '-100%'
}
