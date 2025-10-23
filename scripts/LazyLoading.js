$(window).on('scroll load', function() {
    $('img.lazy').each(function() {
        const imgTop = $(this).offset().top;
        const scrollBottom = $(window).scrollTop() + $(wiindow).height();

        if (imgTop < scrollBottom) {
            const src = $(this).attr('data-src');
            $(this).attr('src', src);
            $(this).removeClass('lazy');
        }
    });
});