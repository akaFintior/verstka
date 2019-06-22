Vue.component('similiar', {
    data(){
        return {
            products: [{
                "product_name": "BLAZE LEGGINS",
                "price": 52,
                "product_id": 10,
                "product_img": "img/woman.jpg"
            },
            {
                "product_name": "ALEXA SWEATER",
                "price": 52,
                "product_id": 11,
                "product_img": "img/woman2.jpg"
            },
            {
                "product_name": "AGNES TOP",
                "price": 52,
                "product_id": 12,
                "product_img": "img/woman3.jpg"
            },
            {
                "product_name": "SYLVIA SWEATER",
                "price": 52,
                "product_id": 13,
                "product_img": "img/woman4.jpg"
            }]
        }
    },
    template: `
    <div>
        <h2>You may also like</h2>
        <div class="similiar_items">
            <similiar-item
            v-for="product of products"
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
                    <div class="item_button">
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