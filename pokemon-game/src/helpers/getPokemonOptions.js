const getPokemons = () => {

    const pokemonArr = Array.from(Array(650));

    return pokemonArr.map((_, index) => index + 1)
}
const getPokemonsOptions = () => {

    const mixPokemons = getPokemons().sort(() => Math.random() - 0.5)
    getPokemonNames(mixPokemons.splice(0, 4));
}

const getPokemonNames = (pokemons = []) => {

    console.log(pokemons);
}
export default getPokemonsOptions;