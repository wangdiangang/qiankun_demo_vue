<!--
 * @Author: 五道杠
-->
<!--
 * @Author: 五道杠
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/homes">Homes第二个</router-link> |
      <router-link to="/about">About第二个</router-link>
      这是个新的新的自己创建的
      {{ $store.state.global.num }}
      <button @click="add">增减的按钮</button>
    </div>
    <div>
    <div>里面的用户名{{$store.state.global.user}}</div>
      <button @click="changeUser">更改用户</button>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  methods: {
    add() {
      console.log(234);
      this.$store.commit("global/addNum", 2);
    },
    changeUser() {
      this.$store.commit('global/setLocal','王小布')
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
