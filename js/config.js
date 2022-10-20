let configBtn = document.querySelector('.gear')
configBtn.addEventListener('click', function() {
    let menuConfig = document.querySelector('.config')
    menuConfig.classList.toggle('active')
})

let colors = document.querySelectorAll('.color-page')
colors.forEach(element => {
    element.addEventListener('click', function(event) {
        let id = event.target.id
        
        switch(id) {
            case 'blue':
                var color = '#00a2ff'
                document.querySelector('.logo').src = 'imgs/logos/logo-az.png' // index
                document.querySelector('.me').src = 'imgs/avatar/eu-az.png' // intro
                document.querySelector('.logo-menu').src = 'imgs/logos/logo-az.png' // menu
                break
            case 'green':
                var color = '#72C042'
                document.querySelector('.logo').src = 'imgs/logos/logo-vd.png' // index
                document.querySelector('.me').src = 'imgs/avatar/eu-vd.png' // intro
                document.querySelector('.logo-menu').src = 'imgs/logos/logo-vd.png' // menu
                break
            case 'orange':
                var color = '#ab741f'
                document.querySelector('.logo').src = 'imgs/logos/logo-la.png' // index
                document.querySelector('.me').src = 'imgs/avatar/eu-la.png' // intro
                document.querySelector('.logo-menu').src = 'imgs/logos/logo-la.png' // menu
                break
            case 'purple':
                var color = '#8d4194'
                document.querySelector('.logo').src = 'imgs/logos/logo-rx.png' // index
                document.querySelector('.me').src = 'imgs/avatar/eu-rx.png' // intro
                document.querySelector('.logo-menu').src = 'imgs/logos/logo-rx.png' // menu
                break
            case 'red':
                var color = '#ff4138'
                document.querySelector('.logo').src = 'imgs/logos/logo-vm.png' // index
                document.querySelector('.me').src = 'imgs/avatar/eu-vm.png' // intro
                document.querySelector('.logo-menu').src = 'imgs/logos/logo-vm.png' // menu
                break
            case 'yellow':
                var color = '#fff200'
                document.querySelector('.logo').src = 'imgs/logos/logo-am.png' // index
                document.querySelector('.me').src = 'imgs/avatar/eu-am.png' // intro
                document.querySelector('.logo-menu').src = 'imgs/logos/logo-am.png' // menu
                break
        }

        document.querySelectorAll('.color-set').forEach(element => {
            element.style.color = color
        });

// index
        document.styleSheets[0].cssRules[6].style.background = color
        document.styleSheets[0].cssRules[11].style.background = color
        document.styleSheets[0].cssRules[12].style.background = color

// menu
        document.styleSheets[1].cssRules[6].style.background = color
        document.styleSheets[1].cssRules[7].style.background = color
        document.styleSheets[1].cssRules[11].style.color = color
        document.styleSheets[1].cssRules[13].style.color = color

// intro
        document.styleSheets[2].cssRules[3].style.border = `3px solid ${color}`

// about
        document.styleSheets[3].cssRules[9].style.border = `1px solid ${color}`
        document.styleSheets[3].cssRules[11].style.background = color
        document.styleSheets[3].cssRules[28].style.stroke = color
        document.styleSheets[3].cssRules[32].style.background = color
        document.styleSheets[3].cssRules[32].style.boxShadow = `0 0 10px #72C042, 0 0 30px ${color}`

// portfolio
        document.styleSheets[4].cssRules[7].style.border = `1px solid ${color}`
        document.styleSheets[4].cssRules[9].style.color = color
        document.styleSheets[4].cssRules[23].style.background = color
        document.styleSheets[4].cssRules[29].style.border = `1px solid ${color}`

// contact
        document.styleSheets[5].cssRules[4].style.background = color
        document.styleSheets[5].cssRules[14].style.border = `2px solid ${color}`
        document.styleSheets[5].cssRules[23].style.color = color
        document.styleSheets[5].cssRules[24].style.background = color
        document.styleSheets[5].cssRules[24].style.border = `1px solid ${color}`

// transition
        document.styleSheets[6].cssRules[0].style.background = color


        document.querySelectorAll('.menu-list').forEach(option => {
            option.addEventListener('mouseenter', function() {
                option.style.color = '#fff'
            })
            option.addEventListener('mouseout', function() {
                option.style.color = color
            })
        })

    })
})

