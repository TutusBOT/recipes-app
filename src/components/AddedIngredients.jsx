import React from "react";

function AddedIngredients({ ingredients }) {
	const splittedIngredients = ingredients.split("+,");
	return (
		<div>
			{splittedIngredients.map((ingredient) => {
				return <div>{ingredient}</div>;
			})}
		</div>
	);
}

export default AddedIngredients;
