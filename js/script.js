const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    modeToggle = document.querySelector(".dar-light"),
    searchToggle = document.querySelector(".searchToggle"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    sidebarClose = document.querySelector(".sidebarClose");



// js Code dark light mode
modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active")
    body.classList.toggle("dark")
});

// js Code to toggle search
searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("active")

});

// js code to Sidebar Menu
sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");

});

body.addEventListener("click", a => {
    let clickedElm = a.target;

    if (!clickedElm.classList.contains('sidebarOpen') && !clickedElm.classList.contains('menu')) {
        nav.classList.remove("active");
    }

});