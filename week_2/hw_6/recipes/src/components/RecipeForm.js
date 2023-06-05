//rfc and tab

import React from "react";
import IngredientForm from "./IngredientForm";

export default function RecipeForm() {
  return (
    <div>
      <form id="form">
        <div className="row">
          <div className="col-sm-9 mb-3">
            <label className="form-label"> Title </label>
            <input id="title-input" type="text" className="form-control" />
          </div>

          <div className="col-sm mb-3">
            <label className="form-label"> Time </label>
            <input id="author-input" type="text" className="form-control" />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Instructions</label>
          <textarea className="form-control"></textarea>
        </div>

        <IngredientForm></IngredientForm>
        <div>Ingredients: </div>

        <div className="d-grid mt-4">
          <button className="btn btn-outline-primary" type="submit">Add Recipe</button>
        </div>
      </form>
    </div>
  );
}
