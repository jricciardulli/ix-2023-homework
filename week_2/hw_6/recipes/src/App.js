import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RecipeForm from "./components/RecipeForm";
import { useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);


  function onRecipeCreated(recipe) {
    setRecipes([...recipes, recipe])
  }

  return (
    <div className="m-5">
      <div className="card p-4">
        <h1>My Recipes</h1>
        <RecipeForm onRecipeCreated={onRecipeCreated}></RecipeForm>
        <h2 className="my-3">Recipe List</h2>
      </div>
    </div>
  );
}

export default App;
