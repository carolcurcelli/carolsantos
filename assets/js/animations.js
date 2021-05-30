(function() {
    const isInViewport = function(elem) {
        let distance = elem.getBoundingClientRect();
        return (
            distance.bottom <= (document.documentElement.clientHeight + (elem.offsetHeight / 2))
        );
    };
    const findMe = document.querySelectorAll('.--animate');
    window.addEventListener('scroll', function(event) {
        findMe.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add("--slide");
            }
        });
    }, false);
})();