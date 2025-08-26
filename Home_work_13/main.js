function open() {
    model.classList.add('background--open')
}
function close() {
    model.classList.remove('background--open')
}

const btn = document.querySelector('.open')
const model = document.querySelector('.background')

btn.addEventListener('click', () => {
    open()
})

model.addEventListener('click', event => {
    const target = event.target
    if (target && target.classList.contains('background') || target.classList.contains('close')) {
        close()
    }
})

document.addEventListener('keydown', event => {
    if(event.code === 'Escape') {
        close()
    }
})