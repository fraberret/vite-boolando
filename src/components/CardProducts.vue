<template>
    <div class="item" v-for="product in products">
        <img class="first_img" :src="product.frontImage">
        <img class="second_img" :src="product.backImage" alt="">
        <div class="heart_square"><i class="fa-solid fa-heart"></i>
        </div>
        <div class="badges" v-for="badge in product.badges">
            <div class="red_square">{{ badge.value }}</div>
            <div class="green_square">Sostenibilit&aacute;</div>
        </div>

        <div class="item_description">
            <p class="brand small">Levi's</p>
            <p class="object"><strong>RELAXED FIT TEE UNISEX</strong></p>
            <span class="discount_price small">14,99&euro;</span>
            <span class="real_price small">29,99&euro;</span>

        </div>
    </div>
</template>

<script>

import { products } from './Products.vue';

export default {
    name: 'CardProducts',
    components: {
        products
    },
    data() {
        return {
            products
        }
    }

}
</script>

<style></style>