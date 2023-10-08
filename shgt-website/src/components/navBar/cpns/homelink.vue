<template>
  <div>
    <el-button type="info" @click="jumpToHome">
      我的主页<el-icon class="el-icon--right"><Grid /></el-icon>
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { Grid } from '@element-plus/icons-vue';
import { isLogin } from '@/hooks/isLogin';
import { notLogin } from '@/hooks/message';

export default defineComponent({
  components: {
    Grid
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const jumpToHome = () => {
      const result = isLogin();
      if (result) {
        store.dispatch('userHome/getUserMsg');
        store.dispatch('getPublishGoods');
        router.push('/home');
        return;
      }
      notLogin();
    };
    return {
      jumpToHome
    };
  }
});
</script>

<style scoped></style>
