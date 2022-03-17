import axios from "axios";
import { useState } from "react";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";

async function getData(ingredients) {
	const url = `https://bartlomiej-tutak.pl/projekty/recipe-app/getRecipeByIngr.php?ingredients=${ingredients}`;
	try {
		const response = await axios.get(url);
		const listOfRecipes = response.data.map((recipe) => {
			console.log(recipe);
			return recipe;
		});
		console.log("lista", listOfRecipes);
		return listOfRecipes;
	} catch {
		console.log("error");
	}
}

function App() {
	const [recievedData, setRecievedData] = useState([]);
	// function updateRecievedData(){
	// 	setRecievedData()
	// }

	return (
		<>
			<RecipeForm getData={getData} setRecievedData={setRecievedData} />
			{/* {console.log(recievedData)} */}
			{/* {recievedData.length
				? recievedData.map((recipe) => {
						return <>{recipe.title}</>;
				  })
				: ""} */}
			{recievedData.length ? <RecipeList recipes={recievedData} /> : ""}
		</>
	);
}

export default App;
