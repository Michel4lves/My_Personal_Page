

$(document).ready(function(e) {
    $('.cvbtn').on('mouseenter', function(e) {
        x = e.pageX - $(this).offset().left
        y = e.pageY - $(this).offset().top
        $(this).find('span').css({top:y, left:x})
    })
    $('.cvbtn').on('mouseout', function(e) {
        x = e.pageX - $(this).offset().left
        y = e.pageY - $(this).offset().top
        $(this).find('span').css({top:y, left:x})
    })
})
