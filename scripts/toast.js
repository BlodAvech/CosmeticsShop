
$(document).ready(function() {
    $(".btn-cart, .add-to-cart").on("click", function() {
        $(".added-to-cart-notification").fadeIn();
    });
    $(".close-added-to-cart").on("click", function() {
        $(".added-to-cart-notification").fadeOut();
    });
});