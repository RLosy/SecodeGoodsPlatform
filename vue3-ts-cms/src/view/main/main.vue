<template>
  <div class="main">
    <el-tag class="tag">网站当前用户人数为：{{ userCounts }}人</el-tag>
    <h2 class="title">校园二手物品交易网站后台管理系统</h2>

    <el-divider class="divder" />

    <div class="content">
      <left-menu class="left" />
      <div class="right-content">
        <router-view class="right" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import leftMenu from './cpns/leftMenu.vue';

export default defineComponent({
  components: {
    leftMenu
  },
  setup() {
    const store = useStore();
    store.dispatch('getAllUsers');
    const userCounts = computed(() => store.state.AllUsers.length);
    return {
      userCounts
    };
  }
});
</script>

<style scoped>
.main {
  position: relative;
  height: 100%;
}
.title {
  text-align: center;
}
.left {
  width: 300px;
  height: 100%;
  background-color: #545c64;
}
.content {
  display: flex;
  height: 100%;
}
.divder {
  margin-bottom: 0px;
}
.right-content {
  width: 100%;
  margin-left: 20px;
}
.tag {
  position: absolute;
  height: 30px;
  top: 1px;
  right: 318px;
}
.right {
  overflow: scroll;
}
</style>
