$(window).on('scroll load', () => checkImgLoading());

function checkImgLoading()
{
    $('img.lazy').each(function() {
        const imgTop = $(this).offset().top;
        const scrollBottom = $(window).scrollTop() + $(window).height();

        if (imgTop < scrollBottom) {
            const src = $(this).attr('data-src');
            $(this).attr('src', src);
            $(this).removeClass('lazy');
        }
    });
}