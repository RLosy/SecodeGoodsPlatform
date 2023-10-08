<template>
  <div class="left-menu">
    <el-menu
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
    >
      <left-user-manager />

      <left-goods-manager />

      <left-comment-manager />

      <left-advers-manager />
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import leftUserManager from './left/leftUser.vue';
import leftGoodsManager from './left/leftGoods.vue';
import leftCommentManager from './left/leftComment.vue';
import leftAdversManager from './left/leftAdvers.vue';

export default defineComponent({
  components: {
    leftUserManager,
    leftGoodsManager,
    leftCommentManager,
    leftAdversManager
  },
  setup() {
    return {};
  }
});
</script>

<style scoped>
.left-menu {
  height: 100%;
}
</style>
