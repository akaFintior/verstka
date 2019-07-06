Vue.component('navigation', {
    template: `
    <nav>
        <ul class="menu">
            <li class="menu__list"><a href="catalog.html" class="menu__link">Home </a>
                <drop-menu-main drop-name="Home"></drop-menu-main>
            </li>
            <li class="menu__list"><a href="catalog.html" class="menu__link">Man </a>
                <drop-menu-main drop-name="Man"></drop-menu-main>
            </li>
            <li class="menu__list"><a href="catalog.html" class="menu__link">Women</a>
                <drop-menu-main drop-name="Women"></drop-menu-main>
            </li>
            <li class="menu__list"><a href="catalog.html" class="menu__link">Kids </a>
                <drop-menu-main drop-name="Kids"></drop-menu-main>
            </li>
            <li class="menu__list"><a href="catalog.html" class="menu__link">Accoseriese </a>
                <drop-menu-main drop-name="Accoseriese"></drop-menu-main>
            </li>
            <li class="menu__list"><a href="catalog.html" class="menu__link">Featured </a>
                <drop-menu-main drop-name="Featured"></drop-menu-main>
            </li>
            <li class="menu__list"><a href="catalog.html" class="menu__link">Hot Deals </a>
                <drop-menu-main drop-name="Hot Deals"></drop-menu-main>
            </li>
        </ul>
    </nav>`
})