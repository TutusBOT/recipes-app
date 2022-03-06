// import React, { useState } from "react";

function SearchBar({ currentIngredient, setCurrentIngredient }) {
	return (
		<input
			placeholder="Search for recipe by ingredients:"
			type="text"
			value={currentIngredient}
			onChange={(e) => {
				setCurrentIngredient(e.target.value);
			}}
		/>
	);
}

export default SearchBar;
