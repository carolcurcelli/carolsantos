(function () {
    const switcher = document.querySelector('#switcher');
    const body = document.querySelector('body');

    console.log(switcher.innerHTML)

    switcher.addEventListener('click', function(){
        if (body.classList.contains('dark')) {
            body.classList.add('light');
            body.classList.remove('dark');
            switcher.innerHTML = '🌙';
        } else if (body.classList.contains('light')) {
            body.classList.add('dark');
            body.classList.remove('light');
            switcher.innerHTML = '🌞';
        }
    });
})();