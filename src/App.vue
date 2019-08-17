<template>
  <div id="app">
    <!--img alt="Vue logo" src="./assets/logo.png"-->
    <!--HelloWorld msg="Welcome to Your Vue.js App"/-->
    <menu_principal msg="Prueba de linkage"/>
    <router-link to="/">Home</router-link>
    <router-link to="/catalogo">Catalogo</router-link>
    <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import menu_principal from './components/menu_principal.vue'

export default {
  name: 'app',
  components: {
    //HelloWorld,
    menu_principal
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
}
</style>

