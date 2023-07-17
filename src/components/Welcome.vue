<template>
  <div class="welcome-container">
    {{ userInfo.welcome }}
  </div>
</template>

<script setup lang="ts">
import {} from "vue"
import userUserInfo from "@/store/useUserInfo"
const userInfo = userUserInfo()
</script>

<style scoped lang="less">
.welcome-container {
}
</style>
