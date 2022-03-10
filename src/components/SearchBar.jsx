// import React, { useState } from "react";

function SearchBar({ currentIngredient, setCurrentIngredient }) {
	return (
		<input
			size={1}
			placeholder="Ingredient"
			type="text"
			value={currentIngredient}
			onChange={(e) => {
				setCurrentIngredient(e.target.value);
			}}
		/>
	);
}

export default SearchBar;
