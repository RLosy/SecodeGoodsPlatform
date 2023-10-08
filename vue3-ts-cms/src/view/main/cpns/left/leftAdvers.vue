<template>
  <div>
    <el-sub-menu index="4">
      <template #title>
        <el-icon><tickets /></el-icon>
        <span>四. 广告管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item @click="jumpToAllAderts" index="4-1"
          >1. (预览/删除)广告</el-menu-item
        >
        <el-menu-item @click="jumpToUploadAdverts" index="4-2"
          >2. 上传轮播广告</el-menu-item
        >
      </el-menu-item-group>
    </el-sub-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { Tickets } from '@element-plus/icons-vue';

export default defineComponent({
  components: {
    Tickets
  },
  setup() {
    const router = useRouter();
    const jumpToAllAderts = () => router.push('/main/allAdverts');
    const jumpToUploadAdverts = () => router.push('/main/uploadAdverts');

    return {
      jumpToAllAderts,
      jumpToUploadAdverts
    };
  }
});
</script>

<style scoped></style>
