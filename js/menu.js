
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

function openPage(page, local) {
    var index = page
    var target = local
    var url = 'content/' + index + '.html'
    var xml = new XMLHttpRequest()
    xml.onreadystatechange = function() {
        if (xml.readyState == 4 && xml.status == 200) {
            document.getElementById(target).innerHTML = xml.responseText
        }
    }
    xml.open('GET', url, true)
    xml.send()
    
    let menu = document.querySelector('.menu')
    menu.classList.remove('active')
    menu.style.top = '-110vh'
}
