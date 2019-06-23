Vue.component("product-item", {
    data(){
        return {
            product: {
                product_name: "MOSCHINO CHEAP AND CHIC",
                price: 52,
                product_id: 14,
                product_img: "img/Layer_42.jpg"
            }
        }
    },
    template: `
    <div>
        <div class="product__item">
            <div class="previous_item"> <a href="#" class="previous_next"><i
                        class="fas fa-caret-left arrow_product"></i></a> </div> <img :src="product.product_img"
                :alt="product.product_name">
            <div class="next_item"> <a href="#" class="previous_next"><i
                        class="fas fa-caret-right arrow_product"></i></a>
            </div>
        </div>
        <div class="item__description">
            <h1 class="item__description-h1">women collection</h1>
            <p class="big">{{product.product_name}}</p>
            <p class="item-rating"><i class="fas fa-star gold"></i><i class="fas fa-star gold"></i><i
                    class="fas fa-star gold"></i><i class="fas fa-star gold"></i><i class="fas fa-star gold"></i></p>
            <p class="small">Compellingly actualize fully researched processes before proactive outsourcing.
                Progressively
                syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core
                competencies rather than exceptional portals. </p>
            <p class="description material">MATERIAL: <span class="black">COTTON</span></p>
            <p class="description">DESIGNER: <span class="black">BINBURHAN</span></p>
            <p class="price">\${{product.price}}</p>
            <form action="#" class="add_to_cart">
                <fieldset class="add_to_cart_fieldset">
                    <label for="color">CHOOSE COLOR</label>
                    <input id="color" list="color_list" placeholder="Red" class="add_to_cart-input">
                    <datalist id="color_list">
                        <option label="Black" value="black"></option>
                        <option label="Blue" value="blue"></option>
                        <option label="Yellow" value="yellow"></option>
                        <option label="Green" value="green"></option>
                        <option label="Orange" value="orange"></option>
                        <option label="White" value="white"></option>
                    </datalist>
                </fieldset>
                <fieldset class="add_to_cart_fieldset">
                    <label for="size">CHOOSE SIZE</label>
                    <input id="size" list="size_list" placeholder="XXL" class="add_to_cart-input">
                    <datalist id="size_list">
                        <option label="XXL" value="xxl"></option>
                        <option label="XL" value="xl"></option>
                        <option label="L" value="l"></option>
                        <option label="M" value="m"></option>
                    </datalist>
                </fieldset>
                <fieldset class="add_to_cart_fieldset">
                    <label>QUANTITY</label>
                    <input type="number" placeholder="1" class="add_to_cart-input"> </fieldset>
                <div class="add_to_cart_button" @click.prevent="$root.$refs.headComp.$refs.cart.addProduct(product)">
                    <a href="#" class="add_to_cart_button_link">
                    <i class="fas fa-shopping-cart"></i>Add to Cart</a></div>
            </form>
        </div>
    </div>`
})