Vue.component('head-comp', {
    template: `
    <header class="header">
        <div class="container header-flex">
            <div class="header__left">
                <a class="logo" href="index.html"><img src="img/logo.png" alt="logo">BRAN<span
                        class="logo-letter">D</span></a>
                <search></search>
            </div>
            <div class="header__right">
                <cart></cart>
                <div class="button">My Account <i class="fas fa-sort-down my_acc_button"></i></div>
            </div>
        </div>
    </header>`
})