const gamesApi = "https://api.rawg.io/api/games/4200";

fetch(gamesApi)
  .then(handleApi)
  .then(createGameDetails)
  .catch(handleError);

function handleApi(response) {
  return response.json();
}

function handleError(error) {
  console.log(error);
}

function createGameDetails(json) {
  console.dir(json);

  //I chose to be more specific when pointing to html, because H1 tags are used on many more pages.
  const name = document.querySelector(".container h1");
  name.innerHTML = json.name;

  const description = document.querySelector(".description");
  description.innerHTML = json.description;

  const image = document.querySelector(".image");
  image.style.backgroundImage = `url('${json.background_image}')`;
}
