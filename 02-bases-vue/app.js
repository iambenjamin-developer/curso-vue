console.log(Vue)

const app = Vue.createApp({

    data() {
        return {
            quote: 'Perro que ladra no muerde',
            author: 'Martin Fierro'
        }
    },

})

app.mount('#myApp')