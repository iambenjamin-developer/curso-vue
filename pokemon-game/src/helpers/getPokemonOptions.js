import pokemonApi from "@/api/pokemonApi";
import { CLOSING } from "ws";

const getPokemons = () => {

    const pokemonArr = Array.from(Array(650));

    return pokemonArr.map((_, index) => index + 1)
}
const getPokemonsOptions = async () => {

    const mixPokemons = getPokemons().sort(() => Math.random() - 0.5)
    const pokemons = await getPokemonNames(mixPokemons.splice(0, 4));
    // console.table(pokemons);

    return pokemons
}

const getPokemonNames = async ([a, b, c, d] = []) => {

    // const response = await pokemonApi.get(`/2`)
    // console.log(a, b, c, d);
    // console.log(response.data.id, response.data.name)

    const promiseArr = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ]
    const [pokemon1, pokemon2, pokemon3, pokemon4] = await Promise.all(promiseArr)

    return [
        { id: pokemon1.data.id, name: pokemon1.data.name },
        { id: pokemon2.data.id, name: pokemon2.data.name },
        { id: pokemon3.data.id, name: pokemon3.data.name },
        { id: pokemon4.data.id, name: pokemon4.data.name },
    ]
}
export default getPokemonsOptions;