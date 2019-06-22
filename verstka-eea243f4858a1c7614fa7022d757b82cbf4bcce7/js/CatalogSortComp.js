Vue.component('catalog-sort', {
    template: `
    <div class="sort_items">
        <fieldset class="sort_items-fieldset">
            <label for="name" class="sort_items-label">Sort&nbsp;By
                <input id="name" list="sort" placeholder="Name" class="sort_items-input"> </label>
            <datalist id="sort">
                <option label="Name" value="Name"></option>
                <option label="Price" value="Price"></option>
                <option label="Rate" value="Rate"></option>
            </datalist>
        </fieldset>
        <fieldset class="sort_items-fieldset">
            <label class="sort_items-label">Show
                <input type="number" placeholder="09" class="sort_items-input"> </label>
        </fieldset>
    </div>`
})