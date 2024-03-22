<script>
import CardProducts from './CardProducts.vue'
import { products } from '../data.js'

export default {
    name: 'AppMain',
    components: {
        CardProducts,

    },
    data() {
        return {
            products
        }
    }
}
</script>

<template>
    <main>
        <div class="main_contenitor contenitor">
            <CardProducts :product="product" :key="product.id" v-for="product in products" />
        </div>
    </main>
</template>

<style></style>
