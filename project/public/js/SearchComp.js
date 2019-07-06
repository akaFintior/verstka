Vue.component('search', {
    template: `
    <form class="header__form" action="#">
        <div class="browse">Browse <i class="fas fa-sort-down browse-arrow"></i>
            <drop-browse></drop-browse>
        </div>
        <input type="text" name="search-bar" placeholder="Search for Item...">
        <button type="submit" class="header-button"><i class="fas fa-search search__button"></i></button>
    </form>`
})