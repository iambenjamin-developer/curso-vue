<template>
  <div>
    <h1>Quien es este pokemon?</h1>
  </div>

  <PokemonPicture :pokemonId="100" :showPokemon="true" />
  <PokemonOptions :pokemons="pokemonArr" />
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
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonsOptions();
      console.log(this.pokemonArr);
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>

