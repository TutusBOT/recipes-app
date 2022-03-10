import axios from "axios";
import { useState } from "react";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";

console.log();

async function getData(ingredients) {
	const { REACT_APP_API_KEY } = process.env;
	const key = "16cf700b1f6247ee9272ac0a756d641c";
	console.log(key);
	const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${key}&ingredients=${ingredients}`;
	try {
		const response = await axios.get(url);
		const listOfRecipes = response.data.map((recipe) => {
			console.log(recipe);
			return recipe;
		});
		console.log("lista", listOfRecipes);
		return listOfRecipes;
	} catch {
		console.log("err");
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
			{console.log(recievedData)}
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
