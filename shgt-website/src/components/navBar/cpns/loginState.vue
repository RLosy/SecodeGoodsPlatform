<template>
  <div class="login-state">
    <el-avatar :size="60" :src="url" />
    <el-divider class="divider" direction="vertical" />
    <p class="nick-name">{{ nickName }}</p>
    <el-divider class="divider" direction="vertical" />
    <el-link @click="quitLogin" type="danger">退出登录</el-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const url = computed(() => store.state.user.avatar);
    const nickName = computed(() => store.state.user.nickName);

    const quitLogin = () => {
      localStorage.removeItem('userToken');
      location.reload();
    };

    return {
      url,
      nickName,
      quitLogin
    };
  }
});
</script>

<style scoped>
.login-state {
  position: relative;
  display: flex;
  height: 100%;
  line-height: 0px;
}
.divider {
  height: 100%;
}
.nick-name {
  color: white;
}
</style>
