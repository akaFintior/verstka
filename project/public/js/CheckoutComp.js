Vue.component('checkout', {
    template:`
    <form action="#" class="container checkout_form">
        <fieldset class="checkout_fieldset">
            <legend class="checkout_fieldset_legend">01. Shipping Adress</legend>
            <div class="checkout_fieldset_flex">
                <div class="checkout_fieldset_flex_left">
                    <h1 class="checkout_fieldset_flex_h1">Check as a guest or register</h1>
                    <h2 class="checkout_fieldset_flex_h2">Register with us for future convenience</h2><br>
                    <input type="radio" name="check" id="guest" checked>
                    <label for="guest">Chekout as a guest</label><br><br>
                    <input type="radio" name="check" id="register">
                    <label for="register">Register</label><br><br>
                    <h1 class="checkout_fieldset_flex_h1">register and save time!</h1>
                    <h2 class="checkout_fieldset_flex_h2">Register with us for future convenience</h2><br>
                    <h2 class="checkout_fieldset_flex_h2">>> Fast and easy checkout</h2>
                    <h2 class="checkout_fieldset_flex_h2">>> Easy access to your order history and status</h2>
                    <button class="checkout_fieldset_flex_button">Continue</button>
                </div>
                <div class="checkout_fieldset_flex_right">
                    <h1 class="checkout_fieldset_flex_h1">Already registed?</h1>
                    <h2 class="checkout_fieldset_flex_h2">Please log in below</h2>
                    <label for="email" class="checkout_fieldset_flex_right_label">EMAIL ADDRESS<em
                            style="color:#ff0d0d">*</em></label>
                    <input class="checkout_fieldset_flex_input" id="email" required pattern="\S+@[a-z]+.[a-z]+">
                    <label for="password" class="checkout_fieldset_flex_right_label">Password<em
                            style="color:#ff0d0d">*</em></label>
                    <input class="checkout_fieldset_flex_input" id="password" required>
                    <p class="checkout_fieldset_flex_required">* Required Fileds</p>
                    <div class="checkout_fieldset_flex_login">
                        <button class="checkout_fieldset_flex_button">Log in</button>
                        <a href="#" class="checkout_fieldset_flex_link">Forgot Password ?</a>
                    </div>
                </div>
            </div>
        </fieldset>
        <fieldset class="checkout_fieldset">
            <legend class="checkout_fieldset_legend">02. BILLING INFORMATION</legend>
        </fieldset>
        <fieldset class="checkout_fieldset">
            <legend class="checkout_fieldset_legend">03. SHIPPING INFORMATION</legend>
        </fieldset>
        <fieldset class="checkout_fieldset">
            <legend class="checkout_fieldset_legend">04. SHIPPING METHOD</legend>
        </fieldset>
        <fieldset class="checkout_fieldset">
            <legend class="checkout_fieldset_legend">05. PAYMENT METHOD</legend>
        </fieldset>
        <fieldset class="checkout_fieldset">
            <legend class="checkout_fieldset_legend">06. ORDER REVIEW</legend>
        </fieldset>
    </form>`
})