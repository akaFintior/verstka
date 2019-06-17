Vue.component('products', {
    data() {
        return {
            products: [],

        }
    },
    template: `<div class="main_featured">
                    <div class="featured_row">
                        <product-item
                        v-for:"product of products"
                        :product="product"
                        :key="product.id-product"
                        :img="product.img"></product-item>
                    </div>
                </div>`
});
Vue.component('product-item', {
    props: {product},
    template: `<div class="item">
                <div class="item_image">
                    <a href="single_page.html"><img src="img/Layer_9.jpg" alt="product_item"> </a>
                    <div class="item_button">
                        <img src="img/cart_white.svg" alt="cart_white">
                        Add to Cart
                    </div>
                </div>
                <a href="single_page.html" class="item_description">mango people t-shirt</a>
                <div class="price_and_rate">
                    <p class="item_price">$52.00</p>
                    <div class="rating">
                        <i class="fas fa-star gold"></i><i class="fas fa-star gold"></i> 
                        <i class="fas fa-star gold"></i><i class="fas fa-star gold"></i><i class="fas fa-star gold"></i>
                    </div>
                </div>
            </div>`
})