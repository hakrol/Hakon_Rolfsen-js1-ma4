const gamesApi = "https://api.rawg.io/api/games";

fetch(gamesApi)
  .then(handleApiResponse)
  .then(createGames)
  .catch(handleApiError);

function handleApiResponse(response) {
  return response.json();
}

function createGames(json) {
  const resultsContainer = document.querySelector(".results");

  const results = json.results;
  console.dir(json);

  let HTML = "";

  results.forEach(insertResultToContainer);

  function insertResultToContainer(result) {
    HTML += `<div class="game">
    <h2>${result.name}</h2>
    <img src="${result.background_image}" alt="${result.slug}">
    </div>`;
  }

  resultsContainer.innerHTML = HTML;
}

function handleApiError(error) {
  console.log(error);
}
