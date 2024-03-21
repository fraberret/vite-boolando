<script>

export default {
    name: 'AppHeader'
}

</script>

<template>

    <header id="site_header">
        <div class="header_contenitor contenitor">
            <div class="gender">
                <ul>
                    <li><a href="#">Donna</a></li>
                    <li><a href="#">Uomo</a></li>
                    <li><a href="#">Bambino</a></li>
                </ul>
            </div>
            <div class="logo">
                <img src="/images/boolean-logo.png" alt="" width="100">
            </div>
            <div class="header_icon">
                <ul>
                    <li><a href="#">
                            <i class="fa-regular fa-user"></i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="fa-regular fa-heart"></i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="fa-solid fa-bag-shopping"></i>
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    </header>

</template>

<style>
#site_header {
    background-color: var(--zala-primary);
    position: fixed;
    color: white;
    width: 100%;
    z-index: 1000;

}

.header_contenitor {

    height: 60px;

}
</style>