// BURGER MENU - Open / Close

document.getElementById("open-burger-menu").addEventListener("click", function () {
    document.getElementById("burger-menu").classList.add("is-open-burger-menu")
});

document.getElementById("close-burger-menu").addEventListener("click", function () {
    document.getElementById("burger-menu").classList.remove("is-open-burger-menu")
});
