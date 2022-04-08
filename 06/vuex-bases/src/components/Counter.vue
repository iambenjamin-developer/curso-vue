<template>
    <h1>Counter Vuex</h1>
    <h2>Acceso directo {{ $store.state.count }}</h2>

    <button @click="incrementarEnUno">+1</button>
    <button @click="incrementarEnCinco">+5</button>
</template>

<script>

export default {
    methods:
    {
        incrementarEnUno() {

            this.$store.commit('incrementOne')
        },
        incrementarEnCinco() {

            this.$store.commit('incrementFive')
        },
    }

}
</script>
