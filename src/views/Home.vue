<template>
  <div class="home-container">
    {{ `${userInfo.userName}:` }}
    <Welcome />
  </div>
</template>

<script setup lang="ts">
import {} from "vue"
import userUserInfo from "@/store/useUserInfo"
import Welcome from "@/components/Welcome.vue"
const userInfo = userUserInfo()
</script>

<style scoped lang="less">
.home-container {
  text-align: center;
  font-size: 16px;
}
</style>
