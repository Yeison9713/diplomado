<template>
    <div id="menu_principal">
        <Header />
        <Body />
    </div>
</template>



<script>
import Header from './header.vue'
import Body from './body.vue'

export default {
    name: "menu_principal",
    components: {
        Header,
        Body
    }
}
</script>

<style >
    #menu_principal{
        display: flex;
        width: 100%;
        justify-content: space-around;
        flex-direction: column;
    }
</style>