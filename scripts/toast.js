document.addEventListener('DOMContentLoaded', function() {
    btn_products();
    btn_favorites();
    btn_sale();
});

function btn_products() {
    $(".btn-cart").on("click", function() {
        $(".added-to-cart-notification").fadeIn();
    });

     $(".close-added-to-cart").on("click", function() {
        $(".added-to-cart-notification").fadeOut();
    });

    $(".btn-like").on("click", function() {
        $(".added-to-favorites-notification").fadeIn();
    });

     $(".close-added-to-favorites").on("click", function() {
        $(".added-to-favorites-notification").fadeOut();
    });
}

function btn_favorites() {
     $(".add-to-cart").on("click", function() {
        $(".added-to-cart-notification").fadeIn();
    });

     $(".close-added-to-cart").on("click", function() {
        $(".added-to-cart-notification").fadeOut();
    });

     $(".remove_fav_item").on("click", function() {
        let choice = confirm("Are you sure you want to remove this item from the cart?");
        if (choice) {
            $(".remove-notification").fadeIn();
            setTimeout(function() {
                $(".remove-notification").fadeOut();
            }, 2000);
        } else {
            $(".remove-notification").hide();
        }
    });
}

function btn_sale() {
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
}