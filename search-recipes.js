

function handleRecipeCardClick(index){
    
                            const recipes = JSON.parse(localStorage.getItem('search'));

                            // Get the selected recipe based on the index
                            const selectedRecipe = recipes[index];

                            // Store the selected recipe details in local storage with a unique name
                            localStorage.setItem('recipe-details', JSON.stringify(selectedRecipe));
                            
                            window.location.href = 'recipe_details.html';
                            
}