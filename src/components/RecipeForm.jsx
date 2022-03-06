import React, { useState } from "react";
import AddedIngredients from "./AddedIngredients";
import SearchBar from "./SearchBar";

function RecipeForm({ getData, setRecievedData }) {
	const [currentIngredient, setCurrentIngredient] = useState("");
	const [ingredients, setIngredients] = useState("");
	return (
		<div className="search-bar">
			<SearchBar
				currentIngredient={currentIngredient}
				setCurrentIngredient={setCurrentIngredient}
			/>
			<button
				onClick={() => {
					if (!ingredients.length) {
						setIngredients(currentIngredient);
					} else {
						setIngredients(`${ingredients}+,${currentIngredient}`);
					}
					setCurrentIngredient("");
				}}
			>
				Add ingredient
			</button>
			<button
				onClick={async () => {
					const response = await getData(ingredients);
					console.log("odp", response);
					const a = await setRecievedData(response);
					setIngredients("");
				}}
			>
				Search
			</button>
			<AddedIngredients ingredients={ingredients} />
		</div>
	);
}

export default RecipeForm;
