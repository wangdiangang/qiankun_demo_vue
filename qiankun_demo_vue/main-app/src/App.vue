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
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <div style="display: flex">
      <aside>
        <el-menu :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
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
  min-width: 150px;
  height: calc(100vh - 160px);
  border: 1px solid blue;
  overflow-y: scroll;
}
main {
  border: 1px solid yellow;
  width: calc(100vw);
  height: calc(100vh - 180px);
  overflow-y: scroll;
}
footer {
  width: 100%;
  height: 80px;
  border: 1px solid red;
}
</style>