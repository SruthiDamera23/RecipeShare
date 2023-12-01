// Function to fetch recipes and store them in local storage
function loadRecipesIntoLocalStorage() {
    // Assuming my_recipes.json is available at this URL
    const jsonFileUrl = 'my_recipes.json';

    // Fetch the JSON file
    fetch(jsonFileUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(recipes => {
            // Store the recipes in local storage
            localStorage.setItem('myRecipes', JSON.stringify(recipes));

            console.log('Recipes loaded into local storage:', recipes);
        })
        .catch(error => {
            console.error('Error loading recipes:', error);
        });
}



function openModal() {
    document.getElementById('uploadModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('uploadModal').style.display = 'none';
}

function uploadRecipe() {
    var recipeTitle = document.getElementById('recipeTitle').value.trim();
    var ingredients = document.getElementById('ingredients').value.trim();
    var cookingInstructions = document.getElementById('cookingInstructions').value.trim();
    var cookingTime = document.getElementById('cookingTime').value.trim();

    if (!recipeTitle || !ingredients || !cookingInstructions || !cookingTime) {
        alert('Please fill in all fields.');
        return;
    }

    if (isNaN(cookingTime)) {
        alert('Cooking time must be a number');
        return;
    }

    

    // Create a new recipe object
    var newRecipe = {
        "recipe_id": 1,
        "image_url": "https://example.com/recipe1.jpg",
        "title": recipeTitle,
        "instructions": cookingInstructions,
        "ingredients": ingredients,
        "cooking_time": cookingTime,
        "comments": ["Delicious!", "My family's favorite"],
        "rating": 4.5
    };

    // Save the recipe
    saveRecipe(newRecipe);

    // Close the modal
    closeModal();
}

function saveRecipe(recipe) {
    // Retrieve existing recipes from local storage
    var existingRecipes = localStorage.getItem('myRecipes');
    var recipes = existingRecipes ? JSON.parse(existingRecipes) : [];

    // Add the new recipe to the array
    recipes.push(recipe);

    // Save the updated recipes back to local storage
    localStorage.setItem('myRecipes', JSON.stringify(recipes));
}

