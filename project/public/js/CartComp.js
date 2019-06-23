Vue.component('cart', {
    data(){
        return {
            cartUrl: `../server/db/userCart.json`,
            cartItems: [],
            price: 0
        }
    },
    mounted(){
        this.$root.getJson(this.cartUrl)
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
            if(product.quantity > 1){
                this.$parent.$parent.putJson(`/api/cart/${product.product_id}`, {quantity: -1})
                    .then(data => {
                        if(data.result){
                            product.quantity--
                        }
                    })
            } else {
                this.$parent.$parent.deleteJson(`/api/cart/${product.product_id}`, product)
                    .then(data => {
                        if(data.result){
                            this.cartItems.splice(this.cartItems.indexOf(product), 1);
                        }
                    })
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
    <div class="header__cart">
        <div class="items_in_cart">{{cartItems.length}}</div>
        <div class="drop-cart">
            <p class="drop-cart-empty" v-if="!cartItems.length">Cart is empty</p>
            <div v-else>
                <cart-item
                v-for="item of cartItems"
                :key="item.product_id"
                :cart-item="item"
                @remove="remove"></cart-item>
                <div class="total_price">
                    <p class="total-price">TOTAL</p>
                    <p class="total-price">\${{ countCartTotal }}</p>
                </div>
            </div>
            <div class="checkout-button"><a href="checkout.html"
                    class="checkout-button_link">Checkout</a>
            </div>
            <div class="go-to-cart-button"><a href="shoping_cart.html" class="go-to-cart-button_link">GO
                    to
                    caRT</a></div>
        </div> <a href="shoping_cart.html"><img src="img/cart.svg" alt="cart"></a>
    </div>`
});
Vue.component('cart-item', {
    props: ['item'],
    template: `
            <div class="cart_item-flex"> <img :src="item.product_img" :alt="item.product_name" width="50" height="100">
                <div class="item-name-rate-price">
                    <h1 class="item_in_cart-h1">{{item.product_name}}</h1> <i class="fas fa-star gold"></i><i
                        class="fas fa-star gold"></i><i class="fas fa-star gold"></i><i
                        class="fas fa-star gold"></i><i class="fas fa-star gold"></i>
                    <h2 class="item_in_cart-h2">{{item.quantity}} x \${{item.price}}</h2>
                </div> <i class="fas fa-times-circle delete_item" @click="$emit('remove', item)"></i>
            </div>`
})