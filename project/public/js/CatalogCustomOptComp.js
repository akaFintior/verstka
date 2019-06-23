Vue.component('catalog-custom', {
    template: `
    <form action="#" class="customer_options">
        <div>
            <h1 class="customer_options-h1">trending now</h1>
            <div class="customer_options_trending"><a href="#"
                    class="customer_options_trending_link customer_options_trending_link_left">Biohemian</a><a
                    href="#"
                    class="customer_options_trending_link customer_options_trending_link_left">Floral</a><a
                    href="#" class="customer_options_trending_link">Lace</a>
                <br><a href="#"
                    class="customer_options_trending_link customer_options_trending_link_left">Floral</a><a
                    href="#"
                    class="customer_options_trending_link customer_options_trending_link_left">Lace</a><a
                    href="#" class="customer_options_trending_link">Biohenian</a></div>
        </div>
        <div>
            <h1 class="customer_options-h1">Size</h1>
            <div class="sizes">
                <label for="xxs">
                    <input id="xxs" type="checkbox"> XXS</label>
                <label for="xs">
                    <input id="xs" type="checkbox"> XS</label>
                <label for="s">
                    <input id="s" type="checkbox"> S</label>
                <label for="m">
                    <input id="m" type="checkbox"> M</label>
                <label for="l">
                    <input id="l" type="checkbox"> L</label>
                <label for="xl">
                    <input id="xl" type="checkbox"> XL</label>
                <label for="xxl">
                    <input id="xxl" type="checkbox"> XXL</label>
            </div>
        </div>
        <div>
            <h1 class="customer_options-h1">Price</h1>
            <meter min="$52" max="$400" value="200"></meter>
        </div>
    </form>`
})