<template>
  <div class="home-container">
    {{ `${userInfo.userName}:` }}
    <Welcome />
    <button @click="onButtonClick">点击</button>
  </div>
</template>

<script setup lang="ts">
import {} from "vue"
import userUserInfo from "@/store/useUserInfo"
import Welcome from "@/components/Welcome.vue"
import { UserDataError } from "exception_desc"
const userInfo = userUserInfo()

function onButtonClick() {
  try {
    
  } catch (error) {
    
    throw new UserDataError({ message: "不能乱点击哈", code: 200 })
  }
}
</script>

<style scoped lang="less">
.home-container {
  text-align: center;
  font-size: 16px;
}
</style>
