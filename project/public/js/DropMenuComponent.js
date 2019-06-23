Vue.component('drop-menu-main', {
    props: ['dropName'],
    template: `
    <div class="drop">
        <div class="drop_flex">
            <h3 class="drop_h3">{{dropName}}</h3>
            <ul class="drop_menu">
                <li class="drop_menu_list"><a href="catalog.html" class="drop_menu_link">Dresses</a>
                </li>
                <li class="drop_menu_list"><a href="catalog.html" class="drop_menu_link">Tops</a></li>
                <li class="drop_menu_list"><a href="catalog.html"
                        class="drop_menu_link">Sweaters/Knits</a>
                </li>
                <li class="drop_menu_list"><a href="catalog.html"
                        class="drop_menu_link">Jackets/Coats</a>
                </li>
                <li class="drop_menu_list"><a href="catalog.html" class="drop_menu_link">Blazers</a>
                </li>
                <li class="drop_menu_list"><a href="catalog.html" class="drop_menu_link">Denim</a></li>
                <li class="drop_menu_list"><a href="catalog.html"
                        class="drop_menu_link">Leggings/Pants</a>
                </li>
                <li class="drop_menu_list"><a href="catalog.html"
                        class="drop_menu_link">Skirts/Shorts</a>
                </li>
                <li class="drop_menu_list"><a href="catalog.html" class="drop_menu_link">Accessories</a>
                </li>
            </ul>
        </div>
        <div class="drop_flex">
            <h3 class="drop_h3">{{dropName}}</h3>
            <ul class="drop_menu">
                <li class="drop_menu_list"><a href="catalog.html" class="drop_menu_link">Dresses</a>
                </li>
                <li class="drop_menu_list"><a href="catalog.html" class="drop_menu_link">Tops</a></li>
                <li class="drop_menu_list"><a href="catalog.html"
                        class="drop_menu_link">Sweaters/Knits</a>
                </li>
                <li class="drop_menu_list"><a href="catalog.html"
                        class="drop_menu_link">Jackets/Coats</a>
                </li>
            </ul>
            <h3 class="drop_h3">{{dropName}}</h3>
            <ul class="drop_menu">
                <li class="drop_menu_list"><a href="catalog.html" class="drop_menu_link">Dresses</a>
                </li>
                <li class="drop_menu_list"><a href="catalog.html" class="drop_menu_link">Tops</a></li>
                <li class="drop_menu_list"><a href="catalog.html"
                        class="drop_menu_link">Sweaters/Knits</a>
                </li>
            </ul>
        </div>
        <div class="drop_flex">
            <h3 class="drop_h3">{{dropName}}</h3>
            <ul class="drop_menu">
                <li class="drop_menu_list"><a href="catalog.html" class="drop_menu_link">Dresses</a>
                </li>
                <li class="drop_menu_list"><a href="catalog.html" class="drop_menu_link">Tops</a></li>
                <li class="drop_menu_list"><a href="catalog.html"
                        class="drop_menu_link">Sweaters/Knits</a>
                </li>
                <li class="drop_menu_list"><a href="catalog.html"
                        class="drop_menu_link">Jackets/Coats</a>
                </li>
            </ul>
            <div class="drop_menu_sale">
                <h2 class="drop_menu_sale-h2">Super sale!</h2>
            </div>
        </div>
    </div>`
})