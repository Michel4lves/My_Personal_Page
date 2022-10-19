let configBtn = document.querySelector('.gear')
configBtn.addEventListener('click', function() {
    let menuConfig = document.querySelector('.config')
    menuConfig.classList.toggle('active')
})

// GREEN
document.querySelector('.green').addEventListener('click', function() {

    document.querySelectorAll('.color-set').forEach(element => {
        element.style.color = '#72C042'
    });

    document.styleSheets[0].cssRules[6].style.background = '#72C042' // index
    document.querySelector('.logo').src = 'imgs/logos/logo-vd.png'
    document.styleSheets[0].cssRules[11].style.background = '#72C042'
    document.styleSheets[0].cssRules[12].style.background = '#72C042'

    document.querySelector('.logo-menu').src = 'imgs/logos/logo-vd.png' // menu
    document.styleSheets[1].cssRules[6].style.background = '#72C042'
    document.styleSheets[1].cssRules[7].style.background = '#72C042'
    document.styleSheets[1].cssRules[11].style.color = '#72C042'
    document.styleSheets[1].cssRules[13].style.color = '#72C042'
    document.querySelectorAll('.menu-list').forEach(option => {
        option.addEventListener('mouseenter', function() {
            option.style.color = '#fff'
        })
        option.addEventListener('mouseout', function() {
            option.style.color = '#72C042'
        })
    })

    document.querySelector('.me').src = 'imgs/avatar/eu-vd.png' // intro
    document.styleSheets[2].cssRules[1].style.background = 'linear-gradient(80deg, #72C042 30%, #171717 45%)'
    document.styleSheets[2].cssRules[3].style.border = '3px solid #72C042'

    document.styleSheets[3].cssRules[9].style.border = '1px solid #72C042' // about
    document.styleSheets[3].cssRules[11].style.background = '#72C042'
    document.styleSheets[3].cssRules[28].style.stroke = '#72C042'
    document.styleSheets[3].cssRules[32].style.background = '#72C042'
    document.styleSheets[3].cssRules[32].style.boxShadow = '0 0 10px #72C042, 0 0 30px #72C042'

    document.styleSheets[4].cssRules[7].style.border = '1px solid #72C042'  // portfolio
    document.styleSheets[4].cssRules[9].style.color = '#72C042'
    document.styleSheets[4].cssRules[23].style.background = '#72C042'
    document.styleSheets[4].cssRules[29].style.border = '1px solid #72C042'
    
    document.styleSheets[5].cssRules[4].style.background = '#72C042' // contact
    document.styleSheets[5].cssRules[14].style.border = '2px solid #72C042'
    document.styleSheets[5].cssRules[23].style.color = '#72C042'
    document.styleSheets[5].cssRules[24].style.background = '#72C042'
    document.styleSheets[5].cssRules[24].style.border = '1px solid #72C042'
    
    document.styleSheets[6].cssRules[0].style.background = '#72C042' // transition

})

