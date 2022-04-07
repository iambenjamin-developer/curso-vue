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
    }
})

app.mount('#myApp')