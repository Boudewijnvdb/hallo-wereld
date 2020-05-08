
//menu toggle
const knop = document.querySelector(".btn-toggle-nav");

const navi = document.querySelector(".nav-sidebar");


knop.addEventListener('click', function () {
    navi.style.visibility = "visible"
});




//buttons

const lichaam = document.querySelector("body");

//red

const knopred = document.querySelector("#red");

knopred.addEventListener('click', function () {
    lichaam.style.backgroundColor = "red"
    navi.style.visibility = "hidden"
});


//green
const knopgreen = document.querySelector("#green");

knopgreen.addEventListener('click', function () {
    lichaam.style.backgroundColor = "green"
    navi.style.visibility = "hidden"
});

//orange
const knoporange = document.querySelector("#orange");

knoporange.addEventListener('click', function () {
    lichaam.style.backgroundColor = "orange"
    navi.style.visibility = "hidden"
});


//purple
const knoppurple = document.querySelector("#purple");

knoppurple.addEventListener('click', function () {
    lichaam.style.backgroundColor = "purple"
    navi.style.visibility = "hidden"
});


//home
const knophome = document.querySelector("#home");

knophome.addEventListener('click', function () {
    lichaam.style.backgroundColor = "grey"
    navi.style.visibility = "hidden"
});

