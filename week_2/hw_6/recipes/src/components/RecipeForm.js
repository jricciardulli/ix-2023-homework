//rfc and tab

import React, { useState } from "react";
import { Recipe } from "../models/recipe";
import IngredientForm from "./IngredientForm";

export default function RecipeForm(props) {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");

  function onRecipeFormSubmit(e) {
    e.preventDefault();
    if (!isValid()) {
      return;
    }

    let recipe = new Recipe(name, time, ingredients, instructions);
    props.onRecipeCreated(recipe);
    clearInput();
  }

  function onIngredientCreated(ingredient) {
    setIngredients([...ingredients, ingredient]);
  }

  function isValid() {
    return (
      name !== "" && time !== "" && ingredients !== [] && instructions !== ""
    );
  }

  function clearInput() {
    setName("");
    setTime("");
    setInstructions("");
    setIngredients([]);
  }

  return (
    <div>
      <form id="form" onSubmit={onRecipeFormSubmit}>
        <div className="row">
          <div className="col-sm-9 mb-3">
            <label className="form-label"> Name </label>
            <input
              id="title-input"
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="col-sm mb-3">
            <label className="form-label"> Time (minutes) </label>
            <input
              id="author-input"
              type="text"
              className="form-control"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Instructions</label>
          <textarea
            className="form-control"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          ></textarea>
        </div>

        <IngredientForm
          onIngredientCreated={onIngredientCreated}
        ></IngredientForm>
        <div>Ingredients: </div>

        <div className="d-grid mt-4">
          <button className="btn btn-outline-primary" type="submit">
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
}
