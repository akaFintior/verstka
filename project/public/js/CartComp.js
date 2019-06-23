Vue.component('cart', {
    data(){
        return {
            cartItems: [],
            price: 0
        }
    },
    mounted(){
        this.$root.getJson(`/api/cart`)
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
                this.$root.putJson(`/api/cart/${find.product_id}`, {quantity: 1})
                    .then(data => {
                        if(data.result){
                            find.quantity++
                        }
                    })
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.$root.postJson(`/api/cart`, prod)
                    .then(data => {
                        if(data.result){
                            this.cartItems.push(prod);
                        }
                    })
            }
        },
        remove(product){
            if(product.quantity > 1){
                this.$root.putJson(`/api/cart/${product.product_id}`, {quantity: -1})
                    .then(data => {
                        if(data.result){
                            product.quantity--
                        }
                    })
            } else {
                this.$root.deleteJson(`/api/cart/${product.product_id}`, product)
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
                <cart-item-small
                v-for="item of cartItems"
                :key="item.product_id"
                :cart-item-small="item"
                @remove="remove"></cart-item-small>
                <div class="total_price">
                    <p class="total-price">TOTAL</p>
                    <p class="total-price">\${{ countCartTotal }}</p>
                </div>
            </div>
            <div class="checkout-button"><a href="checkout.html"
                    class="checkout-button_link">Checkout</a>
            </div>
            <div class="go-to-cart-button">
                <a href="shoping_cart.html" class="go-to-cart-button_link">
                GO to caRT</a></div>
        </div>
        <a href="shoping_cart.html"><img src="img/cart.svg" alt="cart"></a>
    </div>`
});
Vue.component('cart-item-small', {
    props: ['cartItemSmall'],
    template: `
            <div class="cart_item-flex">
                <img :src="cartItemSmall.product_img" :alt="cartItemSmall.product_name" width="50" height="80">
                <div class="item-name-rate-price">
                    <h1 class="item_in_cart-h1">{{cartItemSmall.product_name}}</h1>
                    <i class="fas fa-star gold"></i><i class="fas fa-star gold"></i>
                    <i class="fas fa-star gold"></i><i class="fas fa-star gold"></i>
                    <i class="fas fa-star gold"></i>
                    <h2 class="item_in_cart-h2">{{cartItemSmall.quantity}} x \${{cartItemSmall.price}}</h2>
                </div>
                <i class="fas fa-times-circle delete_item" @click="$emit('remove', cartItemSmall)"></i>
            </div>`
})