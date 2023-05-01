import { store } from "@/store";
import PokemonTable from "./PokemonTable";

function SSRPokemonTable() {
  return (
    <div>
      <PokemonTable pokemons={store.getState().search.startUpPokemon} />
    </div>
  );
}

export default SSRPokemonTable;
