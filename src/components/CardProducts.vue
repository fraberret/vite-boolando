<template>
    <div class="item">

        <img class="first_img" :src="product.frontImage">
        <img class="second_img" :src="product.backImage" alt="">
        <div class="heart_square"><i class="fa-solid fa-heart"></i>
        </div>
        <div class="badges">
            <span v-for="badge in badges"
                :class="{ 'red_square': badge.type == 'discount', 'green_square': badge.type === 'tag' }">
                {{ badge.value }}
            </span>

        </div>

        <div class="item_description">
            <p class="brand small">{{ product.brand }}</p>
            <p class="object"><strong>{{ product.name }}</strong></p>
            <span class="discount_price small">14,99&euro;</span>
            <span class="real_price small">{{ product.price }}&euro;</span>

        </div>
    </div>
</template>

<script>



export default {
    name: 'CardProducts',
    props: {
        product: Object,
        frontImage: String,
        backImage: String,
        badges: Array,
        brand: String,
        name: String,
        price: Number,

    }


}
</script>

<style></style>