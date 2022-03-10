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
			const mappedIngredients = splitted.filter((splIngr, index) => {
				console.log("chuuuuj", splIngr, ingredientToDelete);
				console.log(splitted.length);
				// if (splIngr !== ingredientToDelete) {
				// 	// console.log("inside", splitted.length, index);
				// 	// if (splitted.length - 1 === index || splitted.length === 2) {
				// 	// 	console.log("index", index);
				// 	// 	console.log("dlugosc", splitted.length);
				// 	// 	return splIngr;
				// 	// }
				// 	// console.log("returnuje z plusem");
				// 	return splIngr + "+";
				// } else return null;
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
			// setIngredients(filteredIngredients.toString);
			console.log("filt", filteredIngredients);
			setIngredients(formattedIngredients.toString());
		}
		// console.log(splitted);
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
				<div></div>
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
