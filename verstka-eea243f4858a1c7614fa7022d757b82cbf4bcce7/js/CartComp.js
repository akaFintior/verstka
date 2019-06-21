Vue.component('cart', {
    template: `
    <div class="header__cart">
        <div class="items_in_cart">2</div>
        <div class="drop-cart">
            <div class="cart_item-flex"> <img src="img/item_in_cart_1.jpg" alt="item-in-cart">
                <div class="item-name-rate-price">
                    <h1 class="item_in_cart-h1">Rebox Zane</h1> <i class="fas fa-star gold"></i><i
                        class="fas fa-star gold"></i><i class="fas fa-star gold"></i><i
                        class="fas fa-star gold"></i><i class="fas fa-star-half-alt gold"></i>
                    <h2 class="item_in_cart-h2">1 x $250</h2>
                </div> <i class="fas fa-times-circle delete_item"></i>
            </div>
            <div class="cart_item-flex"> <img src="img/item_in_cart_2.jpg" alt="item-in-cart">
                <div class="item-name-rate-price">
                    <h1 class="item_in_cart-h1">Rebox Zane</h1> <i class="fas fa-star gold"></i><i
                        class="fas fa-star gold"></i><i class="fas fa-star gold"></i><i
                        class="fas fa-star gold"></i><i class="fas fa-star-half-alt gold"></i>
                    <h2 class="item_in_cart-h2">1 x $250</h2>
                </div> <i class="fas fa-times-circle delete_item"></i>
            </div>
            <div class="total_price">
                <p class="total-price">TOTAL</p>
                <p class="total-price">$500.00</p>
            </div>
            <div class="checkout-button"><a href="checkout.html"
                    class="checkout-button_link">Checkout</a>
            </div>
            <div class="go-to-cart-button"><a href="shoping_cart.html" class="go-to-cart-button_link">GO
                    to
                    caRT</a></div>
        </div> <a href="shoping_cart.html"><img src="img/cart.svg" alt="cart"></a>
    </div>`
})