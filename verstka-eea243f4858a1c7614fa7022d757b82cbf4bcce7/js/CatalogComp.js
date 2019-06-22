Vue.component('catalog', {
    data(){
        return {
            products: [{
                "product_name": "MANGO PEOPLE T-SHIRT",
                "price": 52,
                "product_id": 15,
                "product_img": "img/Layer_43.jpg"
            },
            {
                "product_name": "MANGO PEOPLE T-SHIRT",
                "price": 52,
                "product_id": 16,
                "product_img": "img/Layer_44.jpg"
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
                "product_id": 17,
                "product_img": "img/men4.jpg"
            },
            {
                "product_name": "MANGO PEOPLE T-SHIRT",
                "price": 52,
                "product_id": 18,
                "product_img": "img/men41.jpg"
            },
            {
                "product_name": "MANGO PEOPLE T-SHIRT",
                "price": 52,
                "product_id": 19,
                "product_img": "img/men42.jpg"
            },
            {
                "product_name": "MANGO PEOPLE T-SHIRT",
                "price": 52,
                "product_id": 20,
                "product_img": "img/Layer_48.jpg"
            },
            {
                "product_name": "MANGO PEOPLE T-SHIRT",
                "price": 52,
                "product_id": 21,
                "product_img": "img/Layer_49.jpg"
            },
            {
                "product_name": "MANGO PEOPLE T-SHIRT",
                "price": 52,
                "product_id": 20,
                "product_img": "img/men43.jpg"
            }]
        }
    },
    template: `
        <div class="catalog_content">
            <catalog-category></catalog-category>
            <div class="catalog_content_flex">
                <catalog-custom></catalog-custom>
                <catalog-sort></catalog-sort>
                <div class="all_products">
                    <catalog-product
                    v-for="product of products"
                        :product="product"
                        :key="product.product_id"></catalog-product>   
                </div>
                <catalog-pages></catalog-pages>
            </div>
        </div>`
});
Vue.component('catalog-product', {
    props: ['product'],
    template: `
            <div class="product_x">
                <a href="single_page.html"><img :src="product.product_img" :alt="product.product_name"></a>
                <div class="product_hover">
                    <p class="product_hover_p"><i class="fas fa-shopping-cart product-cart"></i> Add to Cart</p>
                    <div class="product_hover_button">
                        <p class="product_hover_p-half"><i class="fas fa-retweet"></i></p>
                        <p class="product_hover_p-half"><i class="far fa-heart"></i></p>
                    </div>
                </div> <a href="single_page.html" class="item_description">{{product.product_name}}</a>
                <p class="item_price">\${{product.price}}</p>
            </div>`
})