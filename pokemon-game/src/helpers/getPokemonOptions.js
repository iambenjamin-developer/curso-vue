import pokemonApi from "@/api/pokemonApi";

const getPokemons = () => {

    const pokemonArr = Array.from(Array(650));

    return pokemonArr.map((_, index) => index + 1)
}
const getPokemonsOptions = () => {

    const mixPokemons = getPokemons().sort(() => Math.random() - 0.5)
    getPokemonNames(mixPokemons.splice(0, 4));
}

const getPokemonNames = async ([a, b, c, d] = []) => {

    const response = await pokemonApi.get(`/2`)
    console.log(a, b, c, d);
    console.log(response.data.id, response.data.name)
  

}
export default getPokemonsOptions;