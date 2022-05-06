<template>

    <h2>{{ customTitleV3 }}</h2>
    <p> {{ counter }} <sup>2</sup> = {{ counter * counter }}</p>

    <div>
        <button v-on:click="increase">+1</button>
        <button @click="decrease">-1</button>
    </div>

</template>

<script>
export default {
    props:
    {
        title: String,
        start: {
            type: Number,
            default: 7,
            // required: true
            validator(value) {
                return value > -1;
            }
        }
    },
    data() {
        return {
            counter: this.start
        }
    },
    methods: {
        getSquareValue() {
            console.log("method => getSquareValue")
            return this.counter * this.counter
        },
        increase() {
            // this.counter++;
            this.counter = this.counter + 1;
        },
        decrease() {
            this.counter--;
        }
    },
    computed: {
        getSquareCounterValue() {
            console.log("computed => getSquareCounterValue")
            return this.counter * this.counter
        },
        customTitle() {
            return this.title || 'Titulo por defecto'
        },
        customTitleV2() {
            if (this.title !== undefined) {
                return this.title;
            } else {
                return 'Título por defecto';
            }
        },
        customTitleV3() {
            return this.title ? this.title : 'Título por defecto';
        },
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