import React from "react";

export default function IngredientTable(props) {

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Units</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {props.ingredients.map((ingredient) => {
            return (
              <tr key={ingredient.num}>
                <td>{ingredient.name}</td>
                <td>{ingredient.amount}</td>
                <td>{ingredient.units}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm m-1"
                    onClick={() => props.onIngredientDelete(ingredient)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-warning btn-sm m-1"
                    onClick={() => props.onIngredientEdit(ingredient)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
