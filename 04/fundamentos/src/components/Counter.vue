<template>

    <h2>Counter!!</h2>
    <p> {{ counter }} <sup>2</sup> = {{ counter * counter }}</p>

    <div>
        <button v-on:click="increase">+1</button>
        <button @click="decrease">-1</button>
    </div>

</template>

<script>
export default {
    name: 'Contador',
    data() {
        return {
            counter: 5
        }
    },
    methods: {
        getSquareValue() {
            console.log("method => getSquareValue")
            return this.counter * this.counter
        },
        increase() {
            this.counter++;
        },
        decrease() {
            this.counter--;
        }
    },
    computed: {
        getSquareCounterValue() {
            console.log("computed => getSquareCounterValue")
            return this.counter * this.counter
        }
    }
}
</script>

<style>
button {
    background-color: #64BB87;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
}

button:hover {
    background-color: #003b19;
    transition: 0.3s ease-in-out;
}
</style>