import React from "react";

export default function PokeTable(props) {
  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {props.pokeList.map((pokemon) => {
            return (
              <tr key={pokemon.name}>
                <td>{pokemon.name}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => props.onInspect(pokemon)}
                  >
                    Inspect
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
