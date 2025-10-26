$(document).ready(function(){
    const $copyBtn = $(".copy-btn");
    const $copyText = $(".blog-text");
    const $toolTip = $(".tooltip");

    $(".copy-btn").on("click", function(){
        navigator.clipboard.writeText($copyText.text());
        $copyText.trigger('copy');
    });

    $copyText.on('copy', function(){
        $copyBtn.text("Copied ✅");
        $toolTip.show();

        setTimeout(() => {
            $copyBtn.text("Copy 📋");
            $toolTip.hide();
        }, 2000);
    });
});
