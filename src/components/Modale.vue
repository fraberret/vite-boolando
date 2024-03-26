<template>
    <div class="modal_page">
        <div class="modale">
            <button @click="closeModal">X</button>
            <div class="body">
                <div class="left_side">
                    <div class="image">
                        <img :src="selectedProduct.frontImage" alt="">
                        <img :src="selectedProduct.backImage" alt="">
                    </div>

                </div>
                <div class="right_side">
                    <div class="item">
                        <h1>{{ selectedProduct.brand }}</h1>
                        <div class="name">
                            <p>Name:</p>
                            <h3>{{ selectedProduct.name }}</h3>
                        </div>
                        <div class="price">
                            <p>Price:</p>
                            <span v-show="discountedPrice" class="discount_price small">{{ discountedPrice
                                }}</span>
                            <span :class="{ 'real_price': discountedPrice }" class="small">{{ selectedProduct.price
                                }}&euro;</span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Modale',
    props: {
        selectedProduct: Object// Prop per ricevere il prodotto selezionato
    },


    data() {
        return {
            discountedPrice: 0,

        }
    },

    mounted() {

        this.selectedProduct.badges.forEach(element => {
            /* console.log(element.type); */

            if (element.type == 'discount') {
                let discount = parseInt(element.value)
                this.discountedPrice = this.selectedProduct.price * ((100 + discount) / 100)
                this.discountedPrice = Number(this.discountedPrice.toFixed(2)) + '€'
            } else {
                this.discountedPrice = ''
            }

        });

    },
    methods: {
        closeModal() {
            this.$emit('close-modal');

        },

    },


}
</script>

<style>
body {
    overflow: hidden;
}

.modal_page {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.188);
    backdrop-filter: blur(8px);
    z-index: 9999;
    position: absolute;
}

button {
    all: unset;
    margin-bottom: 1rem;

}

.body {
    display: flex;
}

.modale {
    background-color: rgb(255, 255, 255);
    width: 80%;
    margin: 0 auto;
    position: absolute;
    padding: 2rem 3rem;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.name {
    padding-top: 1rem;

    & p {
        color: grey;
    }
}

.left_side {
    margin-right: 2rem;
    display: flex;

    & .image {
        display: flex;

        & img {
            width: 50%;
            border: 1px solid black;
        }

    }
}

.price {
    margin-top: 1rem;

    & p {
        color: grey;
    }
}

.real_price {
    text-decoration: line-through;
}

.discount_price {
    color: red;
    margin-right: 0.5rem;
}
</style>