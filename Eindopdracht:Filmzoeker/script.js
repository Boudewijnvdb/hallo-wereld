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



    switch (waarde) {
        case 'Batman':
            console.log('doe batman');
            break;
        case 'Laatste Films':
            console.log('laatste films');
            break;
        case 'Avenger':
            console.log('doe avengers');
            break;
        case 'Princess':
            console.log('doe princess');
            break;
        case 'X-Men':
            console.log('doe xmen');
            break;
        default:


    }

}



radio.forEach((knoppen) => {
    knoppen.addEventListener('change', ietsdoen);
});








