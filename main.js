const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            url: 'https://sporcks.com/en-eu/',
            inventory: 0,
            onSale: false
        }
    }
})
