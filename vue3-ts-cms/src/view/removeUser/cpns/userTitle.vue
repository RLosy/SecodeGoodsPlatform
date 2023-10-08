<template>
  <div class="user-title">
    <li v-for="title in userTitle" :key="title">{{ title }}</li>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const userTitle = ref([
      '用户头像',
      '用户id',
      '账号',
      '手机号',
      '昵称',
      '更新时间',
      '创建时间',
      '操作'
    ]);
    return {
      userTitle
    };
  }
});
</script>

<style scoped>
.user-title {
  display: flex;
  justify-content: space-between;
}
</style>
