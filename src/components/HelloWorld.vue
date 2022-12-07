<script setup lang="ts">
import { ref } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'

import useStore from "@/store"
import {getUserInfo} from '@/api/user'
import { dataType } from 'Element-plus/es/components/table-v2/src/common';
import { ElMessage } from 'Element-plus';

const { user } = useStore()

var data=ref()

defineProps<{ msg: string }>()

const count = ref(0)

function getmyUserInfo(){
        user.getUserInfo();
        ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
  console.log(user)
}
 
</script>

<template>
  <h1>{{ msg }}</h1>


  <button type="button" @click="getmyUserInfo()" >测试测试</button>

  <h1>{{ user.name }} store 数据1111</h1>
  <svg-icon icon-class="menu"/>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
