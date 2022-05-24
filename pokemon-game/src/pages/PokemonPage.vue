<template>
  <div>
    <h1>Quien es este pokemon?</h1>
  </div>

  <PokemonPicture :pokemonId="4" />
  <PokemonOptions />
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
};
</script>

