<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>

  <div v-else>
    <h1>Quien es este pokemon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="true" />
    <PokemonOptions :pokemons="pokemonArr" />
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import getPokemonsOptions from "@/helpers/getPokemonOptions";

// console.log(getPokemonsOptions());
export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonsOptions();

      const rndInt = Math.floor(Math.random() * 4);

      this.pokemon = this.pokemonArr[rndInt];
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>

