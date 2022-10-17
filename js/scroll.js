let progressbar = document.getElementById('progressbar')


about.onscroll = function() {
let totalHeigth = about.scrollHeight - window.innerHeight
let progress = about.scrollTop / (totalHeigth / 100)
progressbar.style.height = progress + '%'
}


portfolio.onscroll = function() {
let totalHeigth = portfolio.scrollHeight - window.innerHeight
let progress = portfolio.scrollTop / (totalHeigth / 100)
progressbar.style.height = progress + '%'
}


contact.onscroll = function() {
let totalHeigth = contact.scrollHeight - window.innerHeight
let progress = contact.scrollTop / (totalHeigth / 100)
progressbar.style.height = progress + '%'
}
