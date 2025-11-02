
$(document).ready(function() {
    //products
    $(".btn-cart, .add-to-cart").on("click", function() {
        $(".added-to-cart-notification").fadeIn();
    });
    $(".close-added-to-cart").on("click", function() {
        $(".added-to-cart-notification").fadeOut();
    });

    //favorites

    $(".btn-like").on("click", function() {
        $(".added-to-favorites-notification").fadeIn();
    });
    $(".close-added-to-favorites").on("click", function() {
        $(".added-to-favorites-notification").fadeOut();
    });

    //sale
     $(".cart").on("click", function() {
        $(".added-to-cart-notification").fadeIn();
    });
    $(".close-added-to-cart").on("click", function() {
        $(".added-to-cart-notification").fadeOut();
    });

    $(".like").on("click", function() {
        $(".added-to-favorites-notification").fadeIn();
    });
    $(".close-added-to-favorites").on("click", function() {
        $(".added-to-favorites-notification").fadeOut();
    });

    //cart
    $(".cart_item_remove").on("click", function() {
        let choice=confirm("Are you sure you want to remove this item from the cart?");
        if (choice){
            $(".remove-notification").fadeIn();
            setTimeout(function() {
                $(".remove-notification").fadeOut();
            }, 2000);
        }
        else{
            $(".remove-notification").fadeOut();
        }
    });

});