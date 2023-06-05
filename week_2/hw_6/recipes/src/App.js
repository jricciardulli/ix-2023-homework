import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RecipeForm from "./components/RecipeForm";

function App() {
  return (
    <div className="m-5">
      <div className="card p-4">
        <h1>My Recipes</h1>
        <RecipeForm></RecipeForm>
      </div>
    </div>
  );
}

export default App;
