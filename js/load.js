function load(page, local) {
    var index = page
    var target = local
    var url = '../content/' + index + '.html'
    var xml = new XMLHttpRequest()
    xml.onreadystatechange = function() {
        if (xml.readyState == 4 && xml.status == 200) {
            document.getElementById(target).innerHTML = xml.responseText
        }
    }
    xml.open('GET', url, true)
    xml.send()
}