const mealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

const mealButton = document.getElementById('get-meal');
const mealContainer = document.querySelector('.meal-container');
mealButton.addEventListener('click', e => {
    fetch(mealUrl)
        .then(response => response.json())
        .then(response => {
            createMeal(response.meals[0]);
        })
        .catch(e => {
            console.warn(e);
        });
});

const createMeal = meal => {
    console.log(meal);
    const ingredients = [];
    //getting the ingredients
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
        } else {
            //stop if no more ingredients
            break;
        }

        const newInnerHTML = `
        <div class="main">
            <div class="content-row">
                <div class="columns meal-ingredient">
                    <img src="${meal.strMealThumb}" alt="Meal Image">
                    ${meal.strCategory ? `<p><strong>Category:</strong> ${meal.strCategory}</p>` : ''}
                    ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
                    ${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
                    <h5>Ingredients:</h5>
                    <ul>
                        ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                </div>
                <div class="columns meal-discreption">
                    <h4>${meal.strMeal}</h4>
                    <p>${meal.strInstructions}</p>
                </div>
            </div>
            ${meal.strYoutube ? `
            <div class="video-row">
                <h5>Video Recipe</h5>
                <div class="videoWrapper">
                    <iframe width="420" height="315" src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}"></iframe>
                </div>
            </div>` : ''}
        </div>
	`;

        mealContainer.innerHTML = newInnerHTML;
    }
}