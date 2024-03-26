<template>
    <div class="modale">
        <div class="top">
            <h1>title</h1>
            <button>X</button>

        </div>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'Modale'
}
</script>

<style>
.modale {
    background-color: rgb(251, 2, 2);
    width: 500px;
    height: 300px;
    margin: 0 auto;
    z-index: 9999;
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