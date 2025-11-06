window.onorientationchange = function () {
    var orientation = window.orientation;
    switch (orientation) {
        case 0:
        case 90:
        case -90: window.location.reload();
            break;
    }
};


// функция для приастановки работы кода на указанное количество мили секунд.
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

(function () {
    // Бургер
    document.addEventListener('click', burgerInit);

    function burgerInit(e) {

        const burgerInit = e.target.closest('.burger-icon');
        const burgerNavLink = e.target.closest('.nav__link');
        if (document.documentElement.clientWidth > 1190 || !burgerInit && !burgerNavLink) return;

        document.body.classList.toggle('body--opend-menu');
    }

    // Выбор языка
    document.addEventListener('click', langSelection);

    function langSelection(e) {

        const langsBoxOpened = document.querySelector('.langs-box--opened');
        const langBox = e.target.closest('.langs-box');
        if (!langBox) {
            if (langsBoxOpened) {
                langsBoxOpened.classList.remove('langs-box--opened');
            }
            return
        }

        langBox.classList.toggle('langs-box--opened');
        let posTop = ('#chat p:last').position().top;
        ('#chat').animate({
            scrollTop: posTop
        }, 1000);
    }

    // Таймер
    // на сколько минут ставим таймер (максимальное значение 100 дней => 100 * 24 * 60 = 144000 минут)
    var count = 43200;
    let error = 0;
    // Таймера
    function start() {
        // запоминаем время запуска
        var start_time = new Date();
        // получаем время окончания таймера (время нажатия + отсчёт таймера)
        var stop_time = start_time.setMinutes(start_time.getMinutes() + count);
        // запускаем ежесекундный отсчёт
        var countdown = setInterval(function () {
            // текущее время
            var now = new Date().getTime();
            // сколько времени осталось до конца таймера (время конца таймера - текущее время)
            var remain = stop_time - now;

            // Столкнулся с проблемой перевода времени на час. Компенсирую
            if (remain > count * 60 * 1000 && error == 0) {
                error = 1
            }
            if (remain < (count * 60 * 1000) - 3599999 && error == 0) {
                error = -1
            }
            if (error == 1) {
                remain = remain - 3600000
            }
            if (error == -1) {
                remain = remain + 3600000
            }

            // переводим миллисекунды в дни, часы, минуты и секунды
            var day = Math.floor((remain % (1000 * 60 * 60 * 24 * 100)) / (1000 * 60 * 60 * 24));
            var hour = Math.floor((remain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var min = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
            var sec = Math.floor((remain % (1000 * 60)) / 1000);
            // отправляем значение таймера на страницу в нужный раздел
            document.getElementById("timer").innerHTML =
                '<div class = "timer__inner">' +

                '<span class = "timer__number">' + String(day).padStart(2, '0') + '</span>' +
                '<span class = "timer__letter">д</span>' +

                '<span class = "timer__br">:</span>' +

                '<span class = "timer__number">' + String(hour).padStart(2, '0') + '</span>' +
                '<span class = "timer__letter">ч</span>' +

                '<span class = "timer__br">:</span>' +

                '<span class = "timer__number">' + String(min).padStart(2, '0') + '</span>' +
                '<span class = "timer__letter">м</span>' +

                '<span class = "timer__br">:</span>' +

                '<span class = "timer__number">' + String(sec).padStart(2, '0') + '</span>' +
                '<span class = "timer__letter">с</span>' +

                '</div>';
            // если время вышло
            if (remain < 0) {
                // останавливаем отсчёт
                clearInterval(countdown);
                // скрываем aside
                document.querySelector('.aside').style.display = "none"
            }
        }, 1000);
    }

    // Запуск таймера
    start()

    // Прогрессбар в настройке портфеля
    //Запрос значения прокрутки скроллбара
    let a = document.getElementById('max');

    // значения по умолчанию
    let i = a.value;
    procent = Math.floor(i / 8);
    document.getElementById('procent').innerText = 'До ' + String(procent) + '%'
    document.getElementById('progress').style.strokeDasharray = String(i) + '%' + ',' + '200%'
    document.querySelector('.portfolio-selection__scrollbar').style.setProperty('--scrollprogress', String(i / 188 * 100) + '%');
    document.querySelector('.portfolio-selection__scrollbar').style.setProperty('--width-shadow', String(document.querySelector('.portfolio-selection__scrollbar').clientWidth * 0.296116) + 'px');
    a.oninput = () => {
        let i = a.value;
        procent = Math.floor(i / 9);
        document.getElementById('procent').innerText = 'До ' + String(procent) + '%'

        document.getElementById('progress').style.strokeDasharray = String(i) + '%' + ',' + '200%'
        document.getElementById('myGradient').setAttribute('y2', i / 176)

        document.querySelector('.portfolio-selection__scrollbar').style.setProperty('--scrollprogress', String(i / 188 * 100) + '%');
        if (i <= 176 && window.innerWidth >= 800) {
            document.querySelector('.portfolio-selection__scrollbar').style.setProperty('--box-shadow', 'inset 5.5px 0 15px ' + String(-i / 3.5) + 'px #242c27ff');
        }
        else {
            document.querySelector('.portfolio-selection__scrollbar').style.setProperty('--box-shadow', 0);
        }
        if (i < 98) {
            document.querySelector('.portfolio-selection__scrollbar').style.setProperty('--width-shadow', String(document.querySelector('.portfolio-selection__scrollbar').clientWidth * 0.296116) + 'px');
        }
        else {
            document.querySelector('.portfolio-selection__scrollbar').style.setProperty('--width-shadow', String(document.querySelector('.portfolio-selection__scrollbar').clientWidth * i / 176 / 2) + 'px');
        }
        if (i == 0) {
            document.querySelector('.portfolio-selection__scrollbar').style.setProperty('--padding-right', 0);
        }
        else {
            document.querySelector('.portfolio-selection__scrollbar').style.setProperty('--padding-right', 18 + 'px');
        }

        let riskIndecator = document.querySelector('.portfolio-selection__settings-profitability');
        let gradientIndex = document.querySelector('.portfolio-selection__progressbar-gradient');

        riskIndecator.classList.remove('portfolio-selection__settings-profitability--easy');
        riskIndecator.classList.remove('portfolio-selection__settings-profitability--medium');
        riskIndecator.classList.remove('portfolio-selection__settings-profitability--hard');

        if (procent < 7) {
            riskIndecator.classList.add('portfolio-selection__settings-profitability--easy')
        }
        if (procent >= 7 && procent < 14) {
            riskIndecator.classList.add('portfolio-selection__settings-profitability--medium')
        }
        if (procent >= 14) {
            riskIndecator.classList.add('portfolio-selection__settings-profitability--hard')
        }

        let myColor1 = window.getComputedStyle(document.querySelector('.portfolio-selection__progressbar-gradient-start'), null).getPropertyValue('stop-color');
        let myColor2 = window.getComputedStyle(document.querySelector('.portfolio-selection__progressbar-gradient-end'), null).getPropertyValue('stop-color');

        document.querySelector('#i-control').style.setProperty('background-image', 'linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)), radial-gradient(circle at top left,' + myColor1 + '33.33%,' + myColor2 + ')');
        document.querySelector('#you-control').style.setProperty('background-image', 'linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)), radial-gradient(circle at top left,' + myColor1 + '33.33%,' + myColor2 + ')');

        // Реализация transition там где его нет в css.
        (async () => {
            for (i = 0; i < 400; i++) {
                await sleep(1);
                let myColor1 = window.getComputedStyle(document.querySelector('.portfolio-selection__progressbar-gradient-start'), null).getPropertyValue('stop-color');
                let myColor2 = window.getComputedStyle(document.querySelector('.portfolio-selection__progressbar-gradient-end'), null).getPropertyValue('stop-color');

                document.querySelector('#i-control').style.setProperty('background-image', 'linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)), radial-gradient(circle at top left,' + myColor1 + '33.33%,' + myColor2 + ')');
                document.querySelector('#you-control').style.setProperty('background-image', 'linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)), radial-gradient(circle at top left,' + myColor1 + '33.33%,' + myColor2 + ')');
            }
        })();
    }

    // Аккордион
    const accordionLists = document.querySelectorAll('.accordion-list')

    accordionLists.forEach(el => {
        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')
            const accordionControl = e.target.closest('.accordion-list__control')
            if (!accordionControl) return
            e.preventDefault()
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

    // Маска для input-телефона
    const telInputs = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+7 999 999 99 99', { placeholder: '-' })
    im.mask(telInputs)

})()