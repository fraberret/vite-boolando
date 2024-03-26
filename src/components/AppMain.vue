<script>
import CardProducts from './CardProducts.vue'
/* import { products } from '../data.js' */
import { state } from '../state.js'


export default {
    name: 'AppMain',
    components: {
        CardProducts,

    },
    data() {
        return {
            state
        }
    },
    methods: {
        showModal() {
            this.$emit('show-modal');
        }
    },
    mounted() {
        console.log(this.state.message);
        this.state.getProducts(this.state.base_products_api_url)
    }
}
</script>

<template>
    <main>
        <div class="main_contenitor contenitor">
            <CardProducts @click="showModal" :product="product" :key="product.id" v-for="product in state.products" />
        </div>
    </main>
</template>

<style></style>
