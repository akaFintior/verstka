Vue.component('similiar', {
    data(){
        return {
            similiarProducts: [],
        }
    },
    mounted(){
        this.$parent.getJson(`/api/similiarproducts`)
            .then(data => {
                for(let el of data){
                    this.similiarProducts.push(el);
                }
            });
    },
    template: `
    <div>
        <h2>You may also like</h2>
        <div class="similiar_items">
            <similiar-item
            v-for="product of similiarProducts"
            :product="product"
            :key="product.product_id"></similiar-item> 
        </div>
    </div>`
});
Vue.component('similiar-item', {
    props: ['product'],
    template: `
            <div class="similiar_product_item">
                <div class="item_image">
                    <a href="#"><img :src="product.product_img" :alt="product.product_name"></a>
                    <div class="item_button" @click="$root.$refs.headComp.$refs.cart.addProduct(product)">
                        <img src="img/cart_white.svg" alt="cart_white">
                        Add to Cart
                    </div>
                </div>
                <a href="#" class="similiar_item_description">{{product.product_name}}</a>
                <div class="price_and_rate">
                    <p class="item_price">\${{product.price}}</p>
                    <div class="rating"><i class="fas fa-star gold"></i> <i class="fas fa-star gold"></i> <i
                            class="fas fa-star gold"></i> <i class="fas fa-star gold"></i> <i
                            class="fas fa-star gold"></i>
                    </div>
                </div>
            </div>`
})