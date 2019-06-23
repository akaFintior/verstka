Vue.component('shopping-cart', {
    data(){
        return {
            cartItems: [],
            price: 0
        }
    },
    mounted(){
        this.$parent.getJson(`/api/cart`)
            .then(data => {
                for(let el of data){
                    this.cartItems.push(el);
                }
            });
    },
    methods: {
        addProduct(product){
            let find = this.cartItems.find(el => el.product_id === product.product_id);
            if(find){
                this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1})
                    .then(data => {
                        if(data.result){
                            find.quantity++
                        }
                    })
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.$parent.postJson(`/api/cart`, prod)
                    .then(data => {
                        if(data.result){
                            this.cartItems.push(prod);
                        }
                    })
            }
        },
        remove(product){
            this.$root.deleteJson(`/api/cart/${product.product_id}`, product)
                .then(data => {
                    if(data.result){
                        this.cartItems.splice(this.cartItems.indexOf(product), 1);
                    }
                })
        },
        removeAll(){
            for(let el of this.cartItems){
                this.remove(el);
            }
        }
    },
    computed: {
        countCartTotal() {
            this.price = 0;
            for (let item of this.cartItems){
                this.price += item.price*item.quantity;
            }
            return this.price;
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
            <cart-product 
            v-for="product of cartItems"
            :cartProduct="product"
            :key="product.product_id"
            @remove="remove"></cart-product>
            <div class="clear_or_continue container">
                <div class="clear_or_continue_button" @click="removeAll()">Clear Shopping cart</div>
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
                    <h2 class="checkout_total_h2">sub total \${{ countCartTotal }}</h2>
                    <h1 class="checkout_total_h1">GRAND TOTAL <span class="pink">\${{ countCartTotal }}</span></h1>
                    <div class="checkout_total_button"><a href="#" class="checkout_total_button_link">Proceed to
                            checkout</a>
                    </div>
                </div>
            </div>
        </div>`
});
Vue.component('cart-product', {
    props: ['cartProduct'],
    template: `
                <div class="container cart_products_item">
                    <div class="cart_products_item_img_and_desc">
                        <img :src="cartProduct.product_img" :alt="cartProduct.product_name" width="100" height="150">
                        <div class="cart_products_item_img_and_desc_info">
                            <a href="single_page.html" class="cart_products_item_img_and_desc_h1">{{cartProduct.product_name}}</a>
                            <div class="cart_products_item_img_and_desc_rate">
                                <i class="fas fa-star gold"></i><i class="fas fa-star gold"></i><i class="fas fa-star gold"></i><i class="fas fa-star gold"></i><i class="fas fa-star gold"></i>
                            </div>
                            <p class="cart_products_item_img_and_desc_p">Color: <span class="gray">Red</span></p>
                            <p class="cart_products_item_img_and_desc_p">Size: <span class="gray">XII</span></p>
                        </div>
                    </div>
                    <div class="cart_products_item_unit_price">\${{cartProduct.price}}</div>
                    <div class="cart_products_item_quantity"><input type="number" class="cart_products_item_quantity_input" min="1"
                            v-model:value="cartProduct.quantity"></div>
                    <div class="cart_products_item_shipping">FREE</div>
                    <div class="cart_products_item_subtotal">\${{cartProduct.price*cartProduct.quantity}}</div>
                    <div class="cart_products_item_action"><i class="fas fa-times-circle" @click="$emit('remove', cartProduct)"></i></div>
                </div>`
})