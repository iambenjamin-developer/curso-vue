const getPokemons = () => {

    const pokemonArr = Array.from(Array(650));

    return pokemonArr.map((_, index) => index + 1)
}
const getPokemonsOptions = () => {

    const mixPokemons = getPokemons().sort(() => Math.random() - 0.5)
    getPokemonNames(mixPokemons.splice(0, 4));
}

const getPokemonNames = ([a, b, c, d] = []) => {

    console.log(a, b, c, d);
}
export default getPokemonsOptions;