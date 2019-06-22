Vue.component('shopping-cart', {
    data(){
        return {
            products: [{
                "product_name": "MANGO PEOPLE T-SHIRT",
                "price": 52,
                "product_id": 1,
                "product_img": "img/Layer_2.jpg",
                "quantity": 1
            },
            {
                "product_name": "MANGO PEOPLE T-SHIRT",
                "price": 52,
                "product_id": 2,
                "product_img": "img/Layer_3.jpg",
                "quantity": 1
            },
            {
                "product_name": "MANGO PEOPLE T-SHIRT",
                "price": 52,
                "product_id": 3,
                "product_img": "img/Layer_4.jpg",
                "quantity": 1
            }]
        }
    },
    template: `
        <div>
            <div class="cart_products container">
                <h1 class="cart_products_product_details_h1">PRODUCT DETAILS</h1>
                <h1 class="cart_products_unit_price_h1">UNIT PRICE</h1>
                <h1 class="cart_products_quantity_h1">QUANTITY</h1>
                <h1 class="cart_products_shipping_h1">SHIPPING</h1>
                <h1 class="cart_products_subtotal_h1">SUBTOTAL</h1>
                <h1 class="cart_products_action_h1">ACTION</h1>
            </div>
            <cart-item 
            v-for="product of products"
            :product="product"
            :key="product.product_id"></cart-item>
            <div class="clear_or_continue container">
                <div class="clear_or_continue_button">Clear Shopping cart</div>
                <div class="clear_or_continue_button">continue shopping</div>
            </div>
            <div class="checkout container">
                <form action="#" class="checkout_form1">
                    <h1 class="checkout_form_h1">Shipping adress</h1>
                    <input type="text" placeholder="Bagladesh">
                    <input type="text" placeholder="State">
                    <input type="text" placeholder="Postcode / Zip">
                    <input type="button" value="GET A QUOTE">
                </form>
                <form action="#" class="checkout_form2">
                    <h1 class="checkout_form_h1">COUPON DISCOUNT</h1>
                    <h2 class="checkout_form_h2">Enter your coupon code if you have one</h2>
                    <input type="text" placeholder="State">
                    <input type="button" value="APPLY COUPON">
                </form>
                <div class="checkout_total">
                    <h2 class="checkout_total_h2">sub total $900</h2>
                    <h1 class="checkout_total_h1">GRAND TOTAL <span class="pink">$900</span></h1>
                    <div class="checkout_total_button"><a href="#" class="checkout_total_button_link">Proceed to
                            checkout</a>
                    </div>
                </div>
            </div>
        </div>`
});
Vue.component('cart-item', {
    props: ['product'],
    template: `
                <div class="container cart_products_item">
                    <div class="cart_products_item_img_and_desc">
                        <img :src="product.product_img" :alt="product.product_name" width="100" height="150">
                        <div class="cart_products_item_img_and_desc_info">
                            <a href="single_page.html" class="cart_products_item_img_and_desc_h1">{{product.product_name}}</a>
                            <p class="cart_products_item_img_and_desc_p">Color: <span class="gray">Red</span></p>
                            <p class="cart_products_item_img_and_desc_p">Size: <span class="gray">XII</span></p>
                        </div>
                    </div>
                    <div class="cart_products_item_unit_price">\${{product.price}}</div>
                    <div class="cart_products_item_quantity"><input type="number" class="cart_products_item_quantity_input"
                            v-model:value="product.quantity"></div>
                    <div class="cart_products_item_shipping">FREE</div>
                    <div class="cart_products_item_subtotal">\${{product.price*product.quantity}}</div>
                    <div class="cart_products_item_action"><i class="fas fa-times-circle"></i></div>
                </div>`
})