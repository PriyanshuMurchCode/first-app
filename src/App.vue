<template>
  <RouterView />
</template>

<script>
let isAuthenticated = false;
export default {
  name: 'App',
  mounted(){
    console.log(isAuthenticated)
    if (isAuthenticated != true) {
        this.$router.push('/login');
      }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
