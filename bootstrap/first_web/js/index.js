// pre loader
window.addEventListener("load", function() {
    const preloader = document.querySelector(".preloader")
    
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = "none";
    }, 1);

})

// tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// toast
document.getElementById("toastbtn").onclick = function () {
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show())
}