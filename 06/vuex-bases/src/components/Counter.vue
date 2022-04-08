<template>
    <h1>Counter Vuex</h1>
    <h2>Acceso directo {{ $store.state.count }}</h2>

    <button @click="incrementarEnUno">+1</button>
    <button @click="incrementarEnCinco">+5</button>
    <input type="text" @keydown.enter="incrementarPorValorParametro(valor)" v-model="valor" />
</template>

<script>

export default {

    data() {
        return {

            valor: 0
        }
    },
    methods:
    {
        incrementarEnUno() {

            this.$store.commit('incrementOne')
        },
        incrementarEnCinco() {

            this.$store.commit('incrementFive')
        },
        incrementarPorValorParametro(valor) {


            this.$store.commit('incrementByValue', valor)
        },
    }

}
</script>
