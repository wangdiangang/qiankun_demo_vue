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
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
    </el-menu>
    <div style="display: flex">
      <aside>
        <el-menu :collapse="isCollapse">
          <el-menu-item index="i" v-for="i in 60" :key="i">
            <i class="el-icon-setting"></i>
            <span slot="title">导航{{ i }}</span>
          </el-menu-item>
        </el-menu>
      </aside>
      <main id="vue"></main>
    </div>
    <footer>底部</footer>
  </div>
</template>

<script>
export default {
  data() {
    return { key: "", isCollapse: false };
  },
  created() {},
  methods: {
    select(key, keyPath) {
      console.log(key, keyPath);
      this.key = key.substr(1) || "home";
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
#vue {
  padding: 10px;
}
aside {
  max-width: 200px;
  height: calc(100vh - 160px);
  border: 1px solid blue;
  overflow-y: scroll;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
main {
  border: 1px solid yellow;
  width: calc(100vw);
  height: calc(100vh - 180px);
  overflow-y: scroll;
}
footer{
  width: 100%;
  height: 80px;
  border:1px solid red
}
</style>