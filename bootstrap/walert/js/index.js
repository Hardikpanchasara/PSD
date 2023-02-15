// pre loader
window.addEventListener("load", function() {
    const preloader = document.querySelector(".preloader")
    preloader.style.opacity = '0';

    setTimeout(() => {
        preloader.style.display = "none";
    }, 10);

})