let imgcontainer = document.querySelectorAll('.img-container');

window.onscroll = () => {
    imgcontainer.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }

        else {
            sec.classList.remove('show-animate');
        }
    })
}