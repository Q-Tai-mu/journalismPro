<!--
 * @职业: 自由 开发者
 * @Description: 
 * @Author: KeHan
 * @Date: 2023-12-03 18:10:30
 * @LastEditTime: 2023-12-20 16:09:14
 * @LastEditors: KeHan
-->

<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Layout />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Layout from "./view/Layout.vue";

export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>

<style>
html,
body #app {
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica,
    "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */

}
</style>
