import SSRPokemonTable from "@/components/SSRPokemonTable";
import { store } from "@/store";
import { setStartUpPokemon } from "@/store/searchSlice";

export default async function Home() {
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();
  store.dispatch(setStartUpPokemon(data));

  return (
    <main>
      <SSRPokemonTable pokemons={data} />
    </main>
  );
}
