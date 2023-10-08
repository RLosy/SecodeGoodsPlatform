<template>
  <div>
    <el-badge type="primary" class="item" @click="jumpToMsg">
      <el-button type="info">
        我的消息<el-icon class="el-icon--right"><Message /></el-icon>
      </el-button>
    </el-badge>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { Message } from '@element-plus/icons-vue';
import { isLogin } from '@/hooks/isLogin';
import { notLogin } from '@/hooks/message';

export default defineComponent({
  components: {
    Message
  },
  setup() {
    const router = useRouter();
    const jumpToMsg = () => {
      const result = isLogin();
      if (result) {
        router.push('/home/message');
        return;
      }
      notLogin();
    };
    return {
      jumpToMsg
    };
  }
});
</script>

<style scoped></style>
