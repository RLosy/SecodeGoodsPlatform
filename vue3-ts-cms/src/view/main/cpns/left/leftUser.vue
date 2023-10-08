<template>
  <div>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><avatar /></el-icon>
        <span>一. 用户管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item @click="jumpToRemoveUser" index="1-1"
          >1. (预览/删除)用户</el-menu-item
        >

        >
        <el-menu-item @click="jumpToSeekUser" index="1-2"
          >2. 查找用户</el-menu-item
        >
      </el-menu-item-group>
    </el-sub-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { Avatar } from '@element-plus/icons-vue';

export default defineComponent({
  components: {
    Avatar
  },
  setup() {
    const router = useRouter();
    const jumpToRemoveUser = () => router.push('/main/removeUser');
    const jumpToAddUser = () => router.push('/main/addUser');
    const jumpToSeekUser = () => router.push('/main/seekUser');
    return {
      jumpToRemoveUser,
      jumpToAddUser,
      jumpToSeekUser
    };
  }
});
</script>

<style scoped></style>
