
//menu toggle
const knop = document.querySelector(".btn-toggle-nav");

const navi = document.querySelector(".nav-sidebar");


knop.addEventListener('click', function () {
    navi.style.visibility = "visible"
});

//buttons

const lichaam = document.querySelector("body");

const knopred = document.querySelector("#red");

knopred.addEventListener('click', function () {
    lichaam.style.backgroundColor = "red"
    navi.style.visibility = "hidden"
});




