

function openModal() {
    document.getElementById('uploadModal').style.display = 'block';
}

function closeModal() {

    document.getElementById('uploadModal').style.display = 'none';
    window.location.href = 'my-recipes.html';
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
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4PYEJAG6SDy3u5i1SIdcj496OZn_Itb6cs-BRPRGmkwBYbGviDEL2lPZ8yWbl7yYTRwI&usqp=CAU",
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
    window.location.href = 'my-recipes.html';

    showUploadSuccessMessage();
    // // Close the modal
    // closeModal();
}

function showUploadSuccessMessage() {
    var successMessage = document.getElementById('uploadSuccessMessage');
    console.log("xyz")
    // Set the content of the message
    successMessage.textContent = 'Upload successful!';

    // Display the message with the 'show' class
    successMessage.classList.add('show');

    // Hide the message after a certain duration (e.g., 3 seconds)
    setTimeout(function () {
        successMessage.classList.remove('show');
    }, 3000); // 3000 milliseconds = 3 seconds
}

