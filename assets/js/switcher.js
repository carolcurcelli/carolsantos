(function () {
    const switcher = document.querySelector('#switcher');
    const body = document.querySelector('html');

    switcher.addEventListener('click', function(){
        if (body.classList.contains('dark')) {
            body.classList.add('light');
            body.classList.remove('dark');
            switcher.innerHTML = '🌛';
        } else if (body.classList.contains('light')) {
            body.classList.add('dark');
            body.classList.remove('light');
            switcher.innerHTML = '🌞';
        }
    });
})();

(function () {
    const menuOpener = document.querySelector('#menuOpener');
    const menuCloser = document.querySelector('#close');
    const body = document.querySelector('html');
    const menuItem = document.querySelectorAll('.menu__item');

    menuOpener.addEventListener('click', function(){
        body.classList.add('--open');
    });
    menuCloser.addEventListener('click', function(){
        body.classList.remove('--open');
    });
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].addEventListener('click', function(){
            body.classList.remove('--open');
        });
    }
    console.log(menuItem);
})();