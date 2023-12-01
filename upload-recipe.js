

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

    var existingRecipes = localStorage.getItem('recipes');
    
    
    var recipes = JSON.parse(existingRecipes);
    

    if (!Array.isArray(recipes)) {
        // If it's not an array, create a new array with the existing data
        recipes = [recipes];
    }

    var recipe_id = recipes.length + 1;
    // Create a new recipe object
    var newRecipe = {
        "recipe_id": recipe_id,
        "image_url": "https://example.com/recipe1.jpg",
        "title": recipeTitle,
        "instructions": cookingInstructions,
        "ingredients": ingredients,
        "cooking_time": cookingTime,
        "comments": ["Delicious!", "My family's favorite"],
        "rating": 4.5
    };

   


    
    // // Add the new recipe to the array
    recipes.push(newRecipe);


    // Save the updated recipes back to local storage
    localStorage.setItem('recipes', JSON.stringify(recipes)); 
    var existingRecipes = localStorage.getItem('recipes');

    // Close the modal
    closeModal();
}

