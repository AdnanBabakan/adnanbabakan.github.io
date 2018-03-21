$(document).on('click', 'a[href^="#"]', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body')
        .animate({
            scrollTop: $(target).offset().top - 120}, 'slow', 'swing', function() {});
});

$(document).ajaxStart(function() {
    $('div.loader-wrapper').fadeIn(500);
}).ajaxComplete(function() {
    $('div.loader-wrapper').fadeOut(500);
});

function render(template, target) {
    $.get('templates/' + template + '.html', {}, function(data) {
        target.html(data);
    });
}

$(document).ready(function() {
    var rootDOM = $('div#root');
    render('home', rootDOM);
});