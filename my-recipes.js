// Add these script functions to handle modal interactions
var openIndex=0;
function openEditModal(index) {
    
    openIndex=index;
    var editModal = document.getElementById('editModal');

    editModal.style.display = 'block';
    const recipes = JSON.parse(localStorage.getItem('recipes'));

    // Get the selected recipe based on the index
    const selectedRecipe = recipes[index];

    console.log(selectedRecipe)

    // Populate modal fields with recipe data
    document.getElementById('editTitle').value = selectedRecipe.title;
    document.getElementById('editInstructions').value = selectedRecipe.instructions;
    document.getElementById('editIngredients').value = selectedRecipe.ingredients;

}

function closeEditModal() {
    var editModal = document.getElementById('editModal');
    editModal.style.display = 'none';

}

function saveChanges() {
    const editTitle = document.getElementById('editTitle').value;
    const editInstructions = document.getElementById('editInstructions').value;
    const editIngredients = document.getElementById('editIngredients').value;

    const recipes = JSON.parse(localStorage.getItem('recipes'));

    recipes[openIndex].title = editTitle;
    recipes[openIndex].instructions = editInstructions;
    recipes[openIndex].ingredients = editIngredients;
    localStorage.setItem('recipes', JSON.stringify(recipes));
    // Add logic to save changes here
    closeEditModal();
}

function handleRecipeCardClick(index){
    
                            
                            const recipes = JSON.parse(localStorage.getItem('recipes'));

                            // Get the selected recipe based on the index
                            const selectedRecipe = recipes[index];

                            // Store the selected recipe details in local storage with a unique name
                            localStorage.setItem('recipe-details', JSON.stringify(selectedRecipe));
                            
                            window.location.href = 'recipe_details.html';
                            
}