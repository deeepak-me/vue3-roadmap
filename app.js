const app = Vue.createApp({

    data() {
        return {
            url: "https://deeepak-me.github.io/portfolio/src ",
            showBooks: true,
            books: [
                { title: 'Homo Sapiens', author: 'Yuval Noah', img: "assets/image1.jpg", isFav: true },
                { title: 'The God delusion', author: 'Richard Dawkins', img: "assets/image2.jpg", isFav: false },
                { title: 'Homo Dues', author: 'Yuval Noah', img: "assets/image3.jpg", isFav: true },
                { title: '1967', author: 'abcd', img: "assets/image1.jpg", isFav: false },
            ]
        }

    },
    methods: {

        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        },


        //mouse events
        // handleEvent(e, data) {
        //     console.log(e, e.type)
        //     if (data) {
        //         console.log(data)
        //     }
        // },

        // handleMouseMove(e) {
        //     this.x = e.offsetX
        //     this.y = e.offsetX
        // }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')

