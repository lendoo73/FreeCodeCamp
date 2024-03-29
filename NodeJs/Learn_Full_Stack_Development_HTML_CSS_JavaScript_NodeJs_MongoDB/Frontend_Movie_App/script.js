const APILINK =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04fb19decd1f5e4477e8291cfea619ea&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04fb19decd1f5e4477e8291cfea619ea&query=";

const main = section;
const search = query;

returnMovies(APILINK);
function returnMovies(url) {
    fetch(url)
    .then((res) => res.json())
    .then(function (data) {
        let content;
        console.log(data.results);
        data.results.forEach((element) => {
            main.innerHTML += `
                <div class="row">
                    <div class="column">
                        <div class="card">
                            <center>
                                <img src="${IMG_PATH + element.poster_path}" class="thumbnail image">
                            </center>
                            <h3 class="title">
                                <span>${element.title}</span><br />
                                <p><a href="movie.html?id=${element.id}&title=${element.title}">reviews</a></p>
                            </h3>
                        </div>
                    </div>
                </div> 
            `;

            // const div_card = document.createElement("div");
            // div_card.setAttribute("class", "card");

            // const div_row = document.createElement("div");
            // div_row.setAttribute("class", "row");

            // const div_column = document.createElement("div");
            // div_column.setAttribute("class", "column");

            // const image = document.createElement("img");
            // image.setAttribute("class", "thumbnail");
            // image.setAttribute("id", "image");

            // const title = document.createElement("h3");
            // title.setAttribute("id", "title");

            // const center = document.createElement("center");

            // title.innerHTML = `${element.title}`;
            // image.src = IMG_PATH + element.poster_path;

            // center.appendChild(image);
            // div_card.appendChild(center);
            // div_card.appendChild(title);
            // div_column.appendChild(div_card);
            // div_row.appendChild(div_column);
            // main.appendChild(div_row);

        });
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = "";

    const searchItem = search.value;

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value = "";
    }
});
