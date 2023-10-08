<template>
  <div>
    <el-button type="info" @click="jumpToMain">
      网站首页<el-icon class="el-icon--right"><HomeFilled /></el-icon>
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { HomeFilled } from '@element-plus/icons-vue';

export default defineComponent({
  components: {
    HomeFilled
  },
  setup() {
    const router = useRouter();
    const jumpToMain = () => {
      router.push('/main');
    };
    return {
      jumpToMain
    };
  }
});
</script>

<style scoped></style>
