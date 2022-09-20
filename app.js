const app = Vue.createApp({
    //data , functions

    //template: '<h2>i am the template</h2>'

    //Data & templates

    data() {
        return {
            showBooks: true,
            title: 'Homo Sapiens',
            author: 'yuval Noah',
            age: 45
        }

    },
    methods: {
        // changeTitle(title) {
        //     // this.title = 'fuck the world'
        //     this.title = title
        // }
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')

