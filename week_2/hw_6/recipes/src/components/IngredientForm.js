import React from "react";

export default function IngredientForm() {
  return (
    <div className="row">
      <div className="mb-3 col-sm-8">
        <label className="form-label"> Ingredient </label>
        <input className="form-control" type="text"></input>
      </div>

      <div className="mb-3 col-sm-2">
        <label className="form-label"> Amount </label>
        <input className="form-control" type="text"></input>
      </div>

      <div className="mb-3 col-sm-2">
        <label className="form-label"> Units </label>
        <input className="form-control" type="text"></input>
      </div>

      <div className="container text-center">
        <button className="btn btn-outline-primary" type="button">Add Ingredient</button>
      </div>
    </div>
  );
}
