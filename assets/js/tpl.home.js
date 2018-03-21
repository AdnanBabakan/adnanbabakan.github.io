$(document).ready(function() {
    $('.bg-one').backgroundMove({
        movementStrength: '20'
    });
    var boxOneTl = new TimelineLite();
        boxOneTl.from($("img.myavatar"), 2, {css:{opacity: 0, x: 50}, ease: Power3.easeOut});     
        boxOneTl.from($("#myName"), 2, {css:{opacity: 0, y: 50}, ease: Power3.easeOut}, '-=2');     
        boxOneTl.from($("#myQuote"), 2, {css:{opacity: 0, x: -50}, ease: Power3.easeOut}, '-=1');  
        boxOneTl.from($("#LearnMore"), 1, {css:{opacity: 0}, ease: Power3.easeOut}, '-=2');  
        $("#menuBox").sticky({topSpacing: 0, zIndex: 100});
});

$(document).on('scroll', function() {
    if($('div.skills').visible(true)) {
        $('div.progress').each(function() {
            var getProgress = $(this).html();
            $(this).animate({width: getProgress}, 2000);
        });
    }
});
