const filmList = document.getElementById("filmLijst");


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

