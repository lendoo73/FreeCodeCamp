const url = new URL(location.href);
const movieId = url.searchParams.get("id");
const movieTitle = url.searchParams.get("title");

// const APILINK ="http://localhost:8000/api/v1/reviews";
const APILINK ="https://review-backend.lendoo73.repl.co/api/v1/reviews";

const main = section;

title.innerText = movieTitle;

console.log(main);
main.innerHTML = `
    <div class="row">
        <div class="column">
            <div class="card">
                <span>New Review</span>
                <p>
                    <strong>Review: </strong>
                    <input type="text" id="new_review" value="">
                </p>
                <p>
                    <strong>User: </strong>
                    <input type="text" id="new_user" value="">
                </p>
                <p>
                    <a href="#" onclick="saveReview('new_review', 'new_user')">💾</a>
                </p>
            </div>
        </div>
    </div>
`;

returnReviews(APILINK);

function returnReviews(url) {
    fetch(`${APILINK}/movie/${movieId}`)
        .then((res) => res.json())
        .then(data => {
            data.forEach(review => {
                main.innerHTML += `
                    <div class="row">
                        <div class="column">
                            <div id="${review._id}" class="card">
                                <p><strong>Review: </strong>${review.review}</p>
                                <p><strong>User: </strong>${review.user}</p>
                                <p><a href="#"onclick="editReview('${review._id}','${review.review}', '${review.user}')">✏️</a> <a href="#" onclick="deleteReview('${review._id}')">🗑</a></p>
                            </div>
                        </div>
                    </div> 
                `;
            });
        })
    ;
}

function editReview(id, review, user) {
    const element = document.getElementById(id);
    const reviewInputId = `review${id}`;
    const userInputId = `user${id}`;

    element.innerHTML = `
        <p>
            <strong>Review: </strong>
            <input type="text" id="${reviewInputId}" value="${review}">
        </p>
        <p>
            <strong>User: </strong>
            <input type="text" id="${userInputId}" value="${user}">
        </p>
        <p>
            <a href="#" onclick="saveReview('${reviewInputId}', '${userInputId}', '${id}',)">💾</a>
        </p>
    `;
}

function saveReview(reviewInputId, userInputId, id="") {
    const review = document.getElementById(reviewInputId).value;
    const user = document.getElementById(userInputId).value;

    if (id) {
        fetch(`${APILINK}/${id}`, {
            method: "PUT",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({user, review})
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                location.reload();
            })
        ;
    } else {
        fetch(`${APILINK}/new`, {
            method: "POST",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({user, review, movieId})
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                location.reload();
            })
        ;
    }
}

function deleteReview(id) {
    fetch(`${APILINK}/${id}`, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            location.reload();
        })
    ;
}