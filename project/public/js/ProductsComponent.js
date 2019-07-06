Vue.component('products', {
    data() {
        return {
            mainProducts: [],

        }
    },
    mounted(){
        this.$root.getJson(`/api/mainproducts`)
            .then(data => {
                for(let el of data){
                    this.mainProducts.push(el);
                }
            });
    },
    template: `
                <div class="main_featured">
                    <div class="featured_row">
                        <single-product
                        v-for="product of mainProducts"
                        :product="product"
                        :key="product.product_id"></single-product>
                    </div>
                </div>`
});
Vue.component('single-product', {
    props: ['product'],
    template: `
            <div class="item">
                <div class="item_image">
                    <a href="single_page.html"><img :src="product.product_img" :alt="product.product_name"> </a>
                    <div class="item_button" @click="$root.$refs.headComp.$refs.cart.addProduct(product)">
                        <img src="img/cart_white.svg" alt="cart_white">
                        Add to Cart
                    </div>
                </div>
                <a href="single_page.html" class="item_description">{{product.product_name}}</a>
                <div class="price_and_rate">
                    <p class="item_price">\${{product.price}}</p>
                    <div class="rating">
                        <i class="fas fa-star gold"></i><i class="fas fa-star gold"></i> 
                        <i class="fas fa-star gold"></i><i class="fas fa-star gold"></i><i class="fas fa-star gold"></i>
                    </div>
                </div>
            </div>`
})