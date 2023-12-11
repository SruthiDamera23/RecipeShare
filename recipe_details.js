function submitComment() {
    const userComment = document.getElementById('user-comment').value;
  
    if (userComment.trim() !== '') {
      const commentList = document.querySelector('.comment-list');
  
      const newComment = document.createElement('div');
      newComment.classList.add('comment');
      newComment.innerHTML = `<p>${userComment}</p>`;
  
      commentList.appendChild(newComment);
  
      // Clear the textarea after submitting the comment
      document.getElementById('user-comment').value = '';
    }
  }


  // Add these variables to store the state of the buttons
let isFavoriteClicked = false;
let isSaveClicked = false;


function toggleFavorite() {
    const favoriteIcon = document.getElementById('favoriteIcon');
    
    // Toggle the state
    isFavoriteClicked = !isFavoriteClicked;

    // Update the icon color based on the state
    if (isFavoriteClicked) {
      const recipes = JSON.parse(localStorage.getItem('favourites'));
      const recipe_details=JSON.parse(localStorage.getItem('recipe-details'));
      recipes.push(recipe_details);
      localStorage.setItem('favourites', JSON.stringify(recipes));
      favoriteIcon.classList.remove('far');
      favoriteIcon.classList.add('fas');



    } else {
      

      favoriteIcon.classList.remove('fas');
      favoriteIcon.classList.add('far');
    }
}

function toggleSave() {
    const saveIcon = document.getElementById('saveIcon');
    console.log("clicked");
    // Toggle the state
    isSaveClicked = !isSaveClicked;

    // Update the icon color based on the state
    if (isSaveClicked) {
      const recipes = JSON.parse(localStorage.getItem('saved'));
      const recipe_details=JSON.parse(localStorage.getItem('recipe-details'));
      recipes.push(recipe_details);
      localStorage.setItem('saved', JSON.stringify(recipes));
      saveIcon.classList.remove('far');
      saveIcon.classList.add('fas');
    } else {
      saveIcon.classList.remove('fas');
      saveIcon.classList.add('far');
    }
}

  
 
  
