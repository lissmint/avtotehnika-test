<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">User List</router-link> |
      <router-link to="/component">Range Demo</router-link>
    </div>
    <b-container>
      <b-row align-h="center">
        <b-col sm="12" lg="6">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getData");
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
