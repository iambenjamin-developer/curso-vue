console.log(Vue)

const app = Vue.createApp({
    template: `
    <h1>Hola mundo</h1>
    <p> {{ !true ? 'Activo' : 'Inactivo'}}</p>
    <p>desde app.js</p>
    `
})

app.mount('#myApp')