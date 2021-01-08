<!--
 * @Author: 五道杠
-->
<template>
  <div>
    <el-menu
      :router="true"
      mode="horizontal"
      default-active="/"
      @select="select"
    >
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/About">About</el-menu-item>
      <el-menu-item index="/vue">Vue</el-menu-item>
      <el-menu-item index="/vue-create">Vue—create</el-menu-item>
    </el-menu>
    <aside>
      <ul>
        <li v-for="i in 60" :key="i">在{{key}}第{{ i }}个li标签</li>
      </ul>
    </aside>
    <main>
      <h1>
        主应用的state.num：{{ $store.state.num }}========用户名是{{
          $store.state.user
        }}
      </h1>
      <button @click="changeUse">更改用户名</button>
      <button @click="addNum(10)">主应用增加10</button>
      <router-view></router-view>
      <div id="vue"></div>
    </main>
    <main id="vue"></main>
  </div>
</template>

<script>
export default {
  data() {
    return { key: "" };
  },
  created() {},
  methods: {
    select(key, keyPath) {
      console.log(key, keyPath);
      this.key=key.substr(1)||'home'
    },
    changeUse() {
      this.$store.commit("setLocal", "五道杠");
    },
    addNum(n) {
      this.$store.commit("addNum", 10);
    },
  },
};
</script>
<style scoped>
#vue{
  padding: 10px;
}
aside {
  display: inline-block;
  position: absolute;
  width: 200px;
  height: calc(100vh - 60px);
  border: 1px solid blue;
  overflow-y: scroll;
}
main {
  display: inline-block;
  margin-left: 200px;
  border: 1px solid yellow;
  width: calc(100vw - 198px);
  height: calc(100vh - 60px);
}
</style>