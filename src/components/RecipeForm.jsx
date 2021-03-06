import React, { useState } from "react";
import AddedIngredients from "./AddedIngredients";
import SearchBar from "./SearchBar";

function RecipeForm({ getData, setRecievedData }) {
	const [currentIngredient, setCurrentIngredient] = useState("");
	const [ingredients, setIngredients] = useState("");
	// const addedIngredientsElement = useRef(null);
	function deleteIngredient(ingredientToDelete) {
		console.log(ingredients);
		const splitted = ingredients.split("+,");
		if (!(splitted.length - 1)) {
			setIngredients("");
			return;
		} else {
			const mappedIngredients = splitted.filter((splIngr) => {
				console.log("chuuuuj", splIngr, ingredientToDelete);
				console.log(splitted.length);
				return splIngr !== ingredientToDelete;
			});
			console.log(mappedIngredients);
			const filteredIngredients = mappedIngredients.filter((ingr) => {
				return ingr != "" || false;
			});
			const formattedIngredients = filteredIngredients.map((ingr, index) => {
				console.log("index", index, filteredIngredients.length);
				if (index + 1 === filteredIngredients.length) {
					return ingr;
				}
				return ingr + "+";
			});
			console.log(
				filteredIngredients[filteredIngredients.length - 1].slice(0, -1)
			);
			console.log("filt", filteredIngredients);
			setIngredients(formattedIngredients.toString());
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<form className="search-bar" onSubmit={handleSubmit}>
			<SearchBar
				currentIngredient={currentIngredient}
				setCurrentIngredient={setCurrentIngredient}
			/>
			<button
				className="button button-add"
				onClick={() => {
					console.log("b");
					if (!ingredients.length) {
						setIngredients(currentIngredient);
					} else {
						setIngredients(`${ingredients}+,${currentIngredient}`);
					}
					setCurrentIngredient("");
					console.log(ingredients);
				}}
			>
				Add ingredient
			</button>
			{ingredients ? (
				<AddedIngredients
					// ref={addedIngredientsElement}
					ingredients={ingredients}
					deleteIngredient={deleteIngredient}
				/>
			) : (
				<div className="ingredients-added"></div>
			)}
			<button
				className="button button-search"
				onClick={async () => {
					if (ingredients) {
						const response = await getData(ingredients);
						console.log("odp", response);
						const a = await setRecievedData(response);
						setIngredients("");
					} else {
						alert("Please add your ingredients first!");
					}
				}}
			>
				Search
			</button>
		</form>
	);
}

export default RecipeForm;
