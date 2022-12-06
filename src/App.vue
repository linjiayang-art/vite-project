<!-- src/App.vue -->
<template>
  <img alt="Vue logo" src="@/assets/vue.svg"/>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite"/>
  <div style="text-align: center;margin-top: 10px">
    <el-button :icon="Search" circle></el-button>
    <el-button type="primary" :icon="Edit" circle></el-button>
    <el-button type="success" :icon="Check" circle></el-button>
    <el-button type="info" :icon="Message" circle></el-button>
    <el-button type="warning" :icon="Star" circle></el-button>
    <el-button type="danger" :icon="Delete" circle></el-button>
  </div>
</template>

<script lang="ts" setup>
     import HelloWorld from '/src/components/HelloWorld.vue'
     import {Search, Edit,Check,Message,Star, Delete} from '@element-plus/icons-vue'
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
