<template>
    <div id="menu_principal">
        <Header />
    </div>
</template>



<script>
import Header from './header.vue'

export default {
    name: "menu_principal",
    components: {
        Header
    }
}
</script>

<style >
    #menu_principal{
        display: flex;
        width: 100%;
        justify-content: space-around
    }
</style>