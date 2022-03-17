import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes }) {
	return (
		<ul className="recipe-list">
			{recipes.map((recipe) => {
				return <Recipe key={recipe.id} recipe={recipe} />;
			})}
		</ul>
	);
}

export default RecipeList;
