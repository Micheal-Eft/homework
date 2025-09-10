(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerInit = e.target.closest('.burger-icon');
        const burgerNavLink = e.target.closest('.nav__link');

        if (document.documentElement.clientWidth > 900 || !burgerInit && !burgerNavLink) return

        document.body.classList.toggle('body--opend-menu')
    }

    // =====

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

    // =====

    const tabControls = document.querySelector('.tab-controls')
    tabControls.addEventListener('click', toggleTab)
    function toggleTab(e) {
        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return
        if (tabControl.classList.contains('tab-controls__link--active')) return

        e.preventDefault()

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const showContent = document.querySelector('.tab-content--show')


        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }
        if (showContent) {
            showContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')
    }

    // =====

    const accordionLists = document.querySelectorAll('.accordion-list')

    accordionLists.forEach(el => {
        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')
            const accordionControl = e.target.closest('.accordion-list__control')
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement
            const accordionContent = accordionControl.nextElementSibling

            if (accordionOpenedItem && accordionOpenedItem != accordionItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened')
                accordionOpenedContent.style.maxHeight = null
            }
            console.log(1)
            accordionItem.classList.toggle('accordion-list__item--opened')

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
            }
            else {
                accordionContent.style.maxHeight = null
            }
        })
    })

    // =====

    const swiper = new Swiper('.gallery__slider', {

        spaceBetween: 15,
        slidesPerView: 2,

        // If we need pagination
        pagination: {
            el: '.gallery__pagination',
            type: 'fraction'
        },

        // Navigation arrows
        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            601: {
                slidesPerView: 3,
            },
            801: {
                spaceBetween: 32,
            },
            1101: {
                slidesPerView: 4,
            }
        }
    });
})()