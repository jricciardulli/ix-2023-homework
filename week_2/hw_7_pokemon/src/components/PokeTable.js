import React from "react";

export default function PokeTable(props) {
  async function onClick(pokemon) {
    await props.onInspect(pokemon);
  }

  return (
    <div>
      <table className="table">
        <tbody id="table-body">
          {props.pokeList.map((pokemon) => {
            return (
              <tr key={pokemon.name}>
                <td>{pokemon.name}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => onClick(pokemon)}
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
