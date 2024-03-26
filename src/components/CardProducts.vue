<template>
    <div class="item">

        <img class="first_img" :src="product.frontImage">
        <img class="second_img" :src="product.backImage" alt="">
        <div class="heart_square"><i class="fa-solid fa-heart"></i>
        </div>
        <div class="badges">
            <span v-for="badge in product.badges"
                :class="{ 'red_square': badge.type == 'discount', 'green_square': badge.type === 'tag' }">
                {{ badge.value }}
            </span>

        </div>

        <div class="item_description">
            <p class="brand small">{{ product.brand }}</p>
            <p class="object"><strong>{{ product.name }}</strong></p>

            <span v-show="discountedPrice" class="discount_price small">{{ discountedPrice
                }}</span>
            <span :class="{ 'real_price': discountedPrice }" class="small">{{ product.price }}&euro;</span>

        </div>
    </div>
</template>

<script>



export default {
    name: 'CardProducts',
    props: {
        id: Number,
        product: Object,
        frontImage: String,
        backImage: String,
        badges: Array,
        brand: String,
        name: String,
        price: Number,

    },
    data() {
        return {
            discountedPrice: 0,

        }
    },

    mounted() {

        this.product.badges.forEach(element => {
            /* console.log(element.type); */

            if (element.type == 'discount') {
                let discount = parseInt(element.value)
                this.discountedPrice = this.product.price * ((100 + discount) / 100)
                this.discountedPrice = Number(this.discountedPrice.toFixed(2)) + '€'
            } else {
                this.discountedPrice = ''
            }

        });

    }


}
</script>

<style></style>