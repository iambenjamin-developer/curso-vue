console.log(Vue)

const app = Vue.createApp({
    // template: `
    // <h1>Hola mundo</h1>
    // <p> {{ !true ? 'Activo' : 'Inactivo'}}</p>
    // <p>desde app.js</p>
    // `
    data() {
        return {
            quote: 'Perro que ladra no muerde',
            author: 'Martin Fierro'
        }
    },
    methods: {
        changeQuote(event) {
            console.log(event)
            this.author = 'Benjamin Correa'
            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#myApp')