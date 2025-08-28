(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerInit = e.target.closest('.burger-icon');
        const burgerNavLink = e.target.closest('.nav__link');
        
        if (document.documentElement.clientWidth > 900 || !burgerInit && !burgerNavLink) return

        document.body.classList.toggle('body--opend-menu')

    }

})()