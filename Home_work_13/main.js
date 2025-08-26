const btnOpen = document.querySelector('.open')
const model = document.querySelector('.background')
const btnClose = document.querySelector('.close')

btnOpen.addEventListener('click', () => {
    model.classList.add('background--open')
})

btnClose.addEventListener('click', () => {
    model.classList.remove('background--open')
})