var progressbar = document.getElementById('progressbar')
var content = document.querySelector('.page-container')

window.onscroll = function() {
    // var totalHeigth = document.body.scrollHeight - window.innerHeight //pages individuals
    var totalHeigth = content.scrollHeight - window.innerHeight
    var progress = (window.pageYOffset / totalHeigth) * 100
    progressbar.style.height = progress + '%'
}
