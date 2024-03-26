<template>
    <div class="modal_page">
        <div class="modale">
            <div class="top">
                <h1>{{ selectedProduct.brand }}</h1>
                <button @close-modal="closeModal">X</button>

            </div>
            <hr>
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
    width: 500px;
    height: 300px;
    margin: 0 auto;
    position: absolute;


    top: 50%;
    left: 50%;
    margin-top: -150px;
    margin-left: -250px;
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
</style>