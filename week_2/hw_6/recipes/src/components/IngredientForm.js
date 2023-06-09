import React, { useState, useEffect } from "react";
import { Ingredient } from "../models/ingredient";

export default function IngredientForm(props) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [units, setUnits] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (props.ingredientToEdit) {
      setName(props.ingredientToEdit.name);
      setAmount(props.ingredientToEdit.amount);
      setUnits(props.ingredientToEdit.units);
    }
  }, [props.ingredientToEdit]);

  function onAddIngredient() {
    if (!isValid()) {
      return;
    }

    let ingredient = new Ingredient(name, amount, units, count);
    props.onIngredientCreated(ingredient);
    setCount(count + 1);
    clearInput();
  }

  function isValid() {
    return name !== "" && amount !== "" && units !== "";
  }

  function clearInput() {
    setName("");
    setAmount("");
    setUnits("");
  }

  return (
    <div className="row">
      <div className="mb-3 col-sm-8">
        <label className="form-label"> Ingredient </label>
        <input
          className="form-control"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>

      <div className="mb-3 col-sm-2">
        <label className="form-label"> Amount </label>
        <input
          className="form-control"
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        ></input>
      </div>

      <div className="mb-3 col-sm-2">
        <label className="form-label"> Units </label>
        <input
          className="form-control"
          type="text"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
        ></input>
      </div>

      <div className="container text-center">
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={() => onAddIngredient()}
        >
          Add Ingredient
        </button>
      </div>
    </div>
  );
}
