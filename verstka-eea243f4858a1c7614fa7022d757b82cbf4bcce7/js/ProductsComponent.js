Vue.component('products', {
    data() {
        return {
            products: [{
                "product_name": "MANGO PEOPLE T-SHIRT",
                "price": 52,
                "product_id": 1,
                "product_img": "img/Layer_2.jpg"
            },
            {
                "product_name": "MANGO PEOPLE T-SHIRT",
                "price": 52,
                "product_id": 2,
                "product_img": "img/Layer_3.jpg"
            },
            {
                "product_name": "MANGO PEOPLE T-SHIRT",
                "price": 52,
                "product_id": 3,
                "product_img": "img/Layer_4.jpg"
            },
            {
                "product_name": "MANGO PEOPLE T-SHIRT",
                "price": 52,
                "product_id": 4,
                "product_img": "img/Layer_5.jpg"
            },
            {
                "product_name": "MANGO PEOPLE T-SHIRT",
                "price": 52,
                "product_id": 5,
                "product_img": "img/Layer_6.jpg"
            },
            {
                "product_name": "MANGO PEOPLE T-SHIRT",
                "price": 52,
                "product_id": 6,
                "product_img": "img/Layer_7.jpg"
            },
            {
                "product_name": "MANGO PEOPLE T-SHIRT",
                "price": 52,
                "product_id": 7,
                "product_img": "img/Layer_8.jpg"
            },
            {
                "product_name": "MANGO PEOPLE T-SHIRT",
                "price": 52,
                "product_id": 8,
                "product_img": "img/Layer_9.jpg"
            }],

        }
    },
    template: `
                <div class="main_featured">
                    <div class="featured_row">
                        <single-product
                        v-for="product of products"
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
                    <div class="item_button">
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