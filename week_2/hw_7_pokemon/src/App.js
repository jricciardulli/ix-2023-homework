import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react"
import PokeTable from "./components/PokeTable";
import { PrimitivePokemon } from "./models/primitivePokemon";

function App() {
  const [pokeList, setPokeList] = useState([]);
  
  async function findPokemon() {
    let url = "https://pokeapi.co/api/v2/pokemon";
    const resp = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await resp.json();
    let results = data.results;
    let pokeData = results.map((poke) => {
      return new PrimitivePokemon(poke.name, poke.url);
    })
    setPokeList(pokeData);
    console.log(data);
  };

  return (
    <div className="text-center mt-5 mx-5">
      <div className="card mb-3 p-3">
        <h1 className="mb-3">My Pokemon</h1>
        <button className="btn btn-primary" onClick={findPokemon}>
          Find Pokemon
        </button>
        <PokeTable pokeList={pokeList}></PokeTable>
      </div>
    </div>
  );
}

export default App;
