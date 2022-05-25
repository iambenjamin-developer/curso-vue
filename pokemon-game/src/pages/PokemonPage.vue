<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>

  <div v-else>
    <h1>Quien es este pokemon?</h1>
    <PokemonPicture :pokemon-id="pokemon.id" :show-pokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr" @select-pokemon="checkAnswer" />

    <div v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame">Nuevo Juego</button>
    </div>
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
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonsOptions();

      const rndInt = Math.floor(Math.random() * 4);

      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(selectedPokemonId) {
      this.showAnswer = true;
      if (selectedPokemonId === this.pokemon.id) {
        this.showPokemon = true;
        this.message = `Correcto, ${this.pokemon.name}`;
      } else {
        this.message = `Oops, era ${this.pokemon.name}`;
      }

      console.log("SelectPokemon se ha llamado", selectedPokemonId);
    },
    newGame() {
      this.pokemonArr = [];
      this.pokemon = null;
      this.showPokemon = false;
      this.showAnswer = false;
      this.message = "";
      this.mixPokemonArray();
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>

