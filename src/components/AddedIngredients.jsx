import React from "react";

function AddedIngredients({ ingredients, deleteIngredient }) {
	const splittedIngredients = ingredients.split("+,");
	return (
		<div className="ingredients-added">
			{splittedIngredients.map((ingredient) => {
				return (
					<div key={ingredient}>
						{ingredient}{" "}
						<button
							onClick={() => {
								deleteIngredient(ingredient);
							}}
						>
							x
						</button>
					</div>
				);
			})}
		</div>
	);
}

export default AddedIngredients;
