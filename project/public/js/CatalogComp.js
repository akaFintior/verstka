Vue.component('catalog', {
    data(){
        return {
            allProductsUrl: "../../server/db/products_catalog.json",
            products: []
        }
    },
    mounted(){
        this.$parent.getJson(this.allProductsUrl)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                }
            });
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