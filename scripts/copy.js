$(document).ready(function(){
    const $copyBtn = $(".copy-btn");
    const $copyText = $(".blog-text");
    const $toolTip = $(".tooltip");

    $(".copy-btn").on("click", function(){
        $copyText.on('copy', function(){
            $copyBtn.text("Copied ✅");
            $toolTip.show();
        });
    });
});