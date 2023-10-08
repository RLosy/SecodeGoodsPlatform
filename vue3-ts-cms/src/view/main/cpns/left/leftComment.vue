<template>
  <div>
    <el-sub-menu index="3">
      <template #title>
        <el-icon><chat-dot-square /></el-icon>
        <span>三. 聊天管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item @click="jumpToTalk" index="3-1"
          >1. 预览/删除聊天</el-menu-item
        >
      </el-menu-item-group>
    </el-sub-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { ChatDotSquare } from '@element-plus/icons-vue';

export default defineComponent({
  components: {
    ChatDotSquare
  },
  setup() {
    const router = useRouter();
    const jumpToTalk = () => router.push('/main/talk');

    return {
      jumpToTalk
    };
  }
});
</script>

<style scoped></style>
