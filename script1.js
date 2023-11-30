document.addEventListener("DOMContentLoaded", function () {
    const recipeCardsContainer = document.getElementById("recipeCardsContainer");

    // Fetch data from favourites.json file
    fetch('./favourites.json')
        .then(response => response.json())
        .then(data => {
            // Iterate through the data and create cards
            data.favourites.forEach(recipe => {
                const card = document.createElement("div");
                card.classList.add("recipeCard");

                // Create title element
                const title = document.createElement("h2");
                title.textContent = recipe.title;
                card.appendChild(title);

                // Create image element
                const image = document.createElement("img");
                image.src = recipe.image_url;
                image.alt = recipe.title;
                card.appendChild(image);

                // Append the card to the container
                recipeCardsContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
