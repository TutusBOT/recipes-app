import React, { useState, useEffect } from "react";
import axios from "axios";

function Recipe({ recipe }) {
	const [steps, setSteps] = useState();
	const [expanded, setExpanded] = useState(false);
	function expand() {
		setExpanded(true);
	}
	function close() {
		setExpanded(false);
	}
	async function getRecipeDetails(id) {
		const key = "16cf700b1f6247ee9272ac0a756d641c";
		const url = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${key}`;
		try {
			const response = await axios.get(url);
			const recipeSteps = response.data[0].steps.map((step) => {
				return step.step;
			});
			return recipeSteps;
		} catch {
			console.log("err");
		}
	}

	return (
		<li>
			<h1>{recipe.title}</h1>
			<a
				href="#"
				onClick={async () => {
					if (recipe.id === 1) {
						expand();
						return;
					}
					try {
						const recipeSteps = await getRecipeDetails(recipe.id);
						setSteps([...recipeSteps]);
						// console.log(steps);
						console.log(recipeSteps);
						expand();
					} catch {
						console.log("error");
					}
				}}
			>
				<img src={recipe.image} alt="recipe" />
			</a>
			<ul>
				{recipe.missedIngredients.map((ingredient) => {
					return <li key={ingredient.id}>{ingredient.original}</li>;
				})}
				{recipe.usedIngredients.map((ingredient) => {
					return <li key={ingredient.id}>{ingredient.original}</li>;
				})}
			</ul>
			{expanded ? (
				<>
					<a
						className="closer"
						href="#"
						onClick={() => {
							close();
						}}
					></a>
					<div className="recipe-details">
						<a
							className="button closer-button"
							href="#"
							onClick={() => {
								close();
							}}
						>
							x
						</a>
						<div className="recipe-details-wrapper">
							<h1>{recipe.title}</h1>
							<h3>Igredients:</h3>
							<ul className="recipe-ingredients">
								{recipe.missedIngredients.map((ingredient) => {
									return <li key={ingredient.id}>{ingredient.original}</li>;
								})}
								{recipe.usedIngredients.map((ingredient) => {
									return <li key={ingredient.id}>{ingredient.original}</li>;
								})}
							</ul>
							<h3>Directions:</h3>
							<ul className="recipe-steps">
								{steps.map((step) => {
									return <li key={step}>{step}</li>;
								})}
							</ul>
						</div>
					</div>
				</>
			) : (
				""
			)}
		</li>
	);
}

export default Recipe;
