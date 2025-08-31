(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerInit = e.target.closest('.burger-icon');
        const burgerNavLink = e.target.closest('.nav__link');

        if (document.documentElement.clientWidth > 900 || !burgerInit && !burgerNavLink) return

        document.body.classList.toggle('body--opend-menu')
    }

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.add('body--modal-opened')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cansel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--modal-opened')
        }
    }
})()