<template>

    <h2>Counter!!</h2>
    <p> {{ counter }} <sup>2</sup> = {{ counter * counter }}</p>
    <p> {{ counter }} <sup>2</sup> = {{ getSquareValue() }}</p>
    <p> {{ counter }} <sup>2</sup> = {{ getSquareValue() }}</p>
    <p> {{ counter }} <sup>2</sup> = {{ getSquareValue() }}</p>
    <p> {{ counter }} <sup>2</sup> = {{ getSquareValue() }}</p>
    <p> {{ counter }} <sup>2</sup> = {{ getSquareValue() }}</p>
    <p> {{ counter }} <sup>2</sup> = {{ getSquareValue() }}</p>

    <p> {{ counter }} <sup>2</sup> = {{ getSquareCounterValue }}</p>
    <p> {{ counter }} <sup>2</sup> = {{ getSquareCounterValue }}</p>
    <p> {{ counter }} <sup>2</sup> = {{ getSquareCounterValue }}</p>
    <p> {{ counter }} <sup>2</sup> = {{ getSquareCounterValue }}</p>
    <p> {{ counter }} <sup>2</sup> = {{ getSquareCounterValue }}</p>
    <p> {{ counter }} <sup>2</sup> = {{ getSquareCounterValue }}</p>

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
</style>