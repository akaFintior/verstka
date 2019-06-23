Vue.component('catalog-category', {
    template: `
    <ul class="item_category">
        <details open="">
        <summary><li class="item_category_list">Category</li></summary> 
        <ul class="category_list_option">
            <li class="category_options">Accessories</li>
            <li class="category_options">Bags</li>
            <li class="category_options">Denim</li>
            <li class="category_options">Hoodies &amp; Sweatshirts</li>
            <li class="category_options">Jackets &amp; Coats</li>
            <li class="category_options">Pants</li>
            <li class="category_options">Polos</li>
            <li class="category_options">Shirts</li>
            <li class="category_options">Shoes</li> 
            <li class="category_options">Shorts</li>
            <li class="category_options">Sweaters &amp; Knits</li>
            <li class="category_options">T-Shirts</li>
            <li class="category_options">Tanks</li>
        </ul> 
        </details>
        <li class="item_category_list">BRAND</li>
        <li class="item_category_list">dESIGNER</li>
    </ul>
    `
})