(function () {
    const switcher = document.querySelector('#switcher');
    const dom = document.querySelector('html');

    switcher.addEventListener('click', function(){
        if (dom.classList.contains('dark')) {
            dom.classList.add('light');
            dom.classList.remove('dark');
            switcher.innerHTML = '🌛';
        } else if (dom.classList.contains('light')) {
            dom.classList.add('dark');
            dom.classList.remove('light');
            switcher.innerHTML = '🌞';
        }
    });

    let date = new Date();
    let time = date.getHours();

    if(time >= 6 && time < 18) {
        dom.classList.add('light');
        dom.classList.remove('dark');
        switcher.innerHTML = '🌛';
    } else {
        dom.classList.add('dark');
        dom.classList.remove('light');
        switcher.innerHTML = '🌞';
    }

})();

(function () {
    const menuOpener = document.querySelector('#menuOpener');
    const menuCloser = document.querySelector('#close');
    const dom = document.querySelector('html');
    const menuItem = document.querySelectorAll('.menu__item');

    menuOpener.addEventListener('click', function(){
        dom.classList.add('--open');
    });
    menuCloser.addEventListener('click', function(){
        dom.classList.remove('--open');
    });
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].addEventListener('click', function(){
            dom.classList.remove('--open');
        });
    }
})();