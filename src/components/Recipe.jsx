import React from "react";

function Recipe({ recipe }) {
	return (
		<li>
			<h1>{recipe.title}</h1>
			<img src={recipe.image} alt="recipe" />
			<ul>
				{recipe.missedIngredients.map((ingredient) => {
					return <li key={ingredient.id}>{ingredient.original}</li>;
				})}
				{recipe.usedIngredients.map((ingredient) => {
					return <li key={ingredient.id}>{ingredient.original}</li>;
				})}
			</ul>
		</li>
	);
}

export default Recipe;
