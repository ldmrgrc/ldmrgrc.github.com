let links = document.querySelectorAll('.close')

links.forEach(function (l) {
    console.log(l)
    l.addEventListener('click', function (even) {
        even.preventDefault();

        let content = document.querySelector('.content');
        content.classList.remove("animate__animated");
        content.classList.remove('animate__fadeInDown');
        content.classList.add("animate__animated");
        content.classList.add('animate__fadeOutUp');

        setTimeout(() => {
            location.href = '/'
        }, 1000);

        return false;
    })
})

let icon = document.querySelectorAll('i');

icon.forEach(function (icon) {
    icon.classList.remove('fa-star-half');
    icon.classList.add('fa-star');
})