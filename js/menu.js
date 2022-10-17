function menu() {
    let menu = document.querySelector('.menu')
    menu.classList.toggle('active')
    let menuActive = document.querySelector('.active')
    menuActive.style.top = 0
}

function exitMenu() {
    let menu = document.querySelector('.menu')
    menu.classList.remove('active')
    menu.style.top = '-110vh'
}

let introMenu = document.querySelector('#menuIntro')
introMenu.onclick = function() {
    let progressbar = document.getElementById('progressbar')
    progressbar.style.height = '0'
    let menu = document.querySelector('.menu')
    menu.classList.remove('active')
    menu.style.top = '-110vh'
    let about = document.querySelector('.about')
    about.style.right = '110vw'
    let portfolio = document.querySelector('.portfolio')
    portfolio.style.left = '110vw'
    let contact = document.querySelector('.contact')
    contact.style.top = '150vh'
}


let aboutMenu = document.querySelector('#menuAbout')
aboutMenu.onclick = function() {
    let menu = document.querySelector('.menu')
    menu.classList.remove('active')
    menu.style.top = '-110vh'
    let about = document.querySelector('.about')
    about.style.right = '0'
    let portfolio = document.querySelector('.portfolio')
    portfolio.style.left = '110vw'
    let contact = document.querySelector('.contact')
    contact.style.top = '150vh'
}


let portfolioMenu = document.querySelector('#menuPortfolio')
portfolioMenu.onclick = function() {
    let menu = document.querySelector('.menu')
    menu.classList.remove('active')
    menu.style.top = '-110vh'
    let about = document.querySelector('.about')
    about.style.right = '110vw'
    let portfolio = document.querySelector('.portfolio')
    portfolio.style.left = '0'
    let contact = document.querySelector('.contact')
    contact.style.top = '150vh'
}


let contactMenu = document.querySelector('#menuContact')
contactMenu.onclick = function() {
    let progressbar = document.getElementById('progressbar')
    progressbar.style.height = '0'
    let menu = document.querySelector('.menu')
    menu.classList.remove('active')
    menu.style.top = '-110vh'
    let about = document.querySelector('.about')
    about.style.right = '110vw'
    let portfolio = document.querySelector('.portfolio')
    portfolio.style.left = '110vw'
    let contact = document.querySelector('.contact')
    contact.style.top = '0'
}
