import axios from 'axios';
import { reactive } from 'vue'

export const state = reactive({
    message: 'hello',
    products: [],
    base_products_api_url: 'http://localhost:3000/products',

    getProducts(url) {
        axios.get(url)
            .then(response => {
                this.products = response.data
            })
    }







});