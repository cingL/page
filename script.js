$(document).on('ready', function() {
    var bgcolor = ['red', 'yellow', 'blue']
    var text = ['red', 'yellow', 'blue']
    $('.image').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });
    var list = $('button')
    for (var i = list.length - 1; i >= 0; i--) {
        console.log(list[i])
        $(list[i]).css('border', '1px solid ' + bgcolor[i])
        $(list[i]).css('border-radius', "50%")
    }
    $('.image').append("<div class='title'>red</div>")
    $('.image').on('swipe', function(event, slick, direction) {
        // console.log(event);
        $('body').css('background-color', bgcolor[slick.currentSlide])
        $('.title').text(text[slick.currentSlide])
        console.log($('button')[slick.currentSlide]);
        var list = $('button')
        for (var i = list.length - 1; i >= 0; i--) {
            console.log(list[i])
            $(list[i]).css('border-color', bgcolor[i])
        }
    });
});