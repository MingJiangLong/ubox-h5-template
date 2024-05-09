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
const userInfo = userUserInfo()

function onButtonClick() {

}
</script>

<style scoped lang="less">
.home-container {
  text-align: center;
  font-size: 16px;
}
</style>
