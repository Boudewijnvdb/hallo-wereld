const filmList = document.getElementById("filmLijst");
const radio = document.querySelectorAll('input');



//add titles and images to DOM
const movieListItems = movies.forEach(movie => {
    let poster = movie.Poster;
    let name = movie.Title;

    let list = document.createElement('li');
    list.innerHTML = name;
    filmList.appendChild(list);
    let plaat = document.createElement('img');
    plaat.src = poster;
    filmList.appendChild(plaat);
}

);

const ietsdoen = event => {
    const waarde = event.target.value;
    console.log(waarde);
}




radio.forEach((knoppen) => {
    knoppen.addEventListener('change', ietsdoen);
});








