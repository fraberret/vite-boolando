<template>
    <div class="modal_page">
        <div class="modale">

            <div class="left_side">
                <div class="left_side">
                    <img :src="selectedProduct.frontImage" alt="">
                </div>
            </div>
            <div class="right_side">
                <div class="item">
                    <h1>{{ selectedProduct.brand }}</h1>
                    <h3>{{ selectedProduct.name }}</h3>

                </div>


            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Modale',
    props: {
        selectedProduct: Object // Prop per ricevere il prodotto selezionato
    },


    data() {
        return {

        }
    },
    methods: {
        closeModal() {
            this.$emit('close-modal');

        },

    },


}
</script>

<style>
.modal_page {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.188);
    backdrop-filter: blur(8px);
    z-index: 9999;
    position: absolute;
}

.modale {
    background-color: rgb(255, 255, 255);
    display: flex;
    margin: 0 auto;
    position: absolute;
    padding: 1rem;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.top {
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    & button {
        all: unset;
    }

    & button:hover {
        cursor: pointer;
    }
}

.left_side {
    & img {}
}
</style>