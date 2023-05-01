import SearchInput from "@/components/SearchInput";
import Providers from "@/components/Provider";
import { store } from "@/store";
import { setStartUpPokemon } from "@/store/searchSlice";
import Preloader from "@/components/Preloader";

export default async function Home() {
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();
  store.dispatch(setStartUpPokemon(data));

  return (
    <main>
      <Preloader pokemons={data} />
      <Providers>
        <SearchInput />
      </Providers>
    </main>
  );
}
