<template>
  <div>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><grid /></el-icon>
        <span>二. 商品管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item @click="jumpToAllGoods" index="2-1"
          >1. (预览/删除)商品</el-menu-item
        >
        <el-menu-item @click="jumpToGoodsSearch" index="2-2"
          >2. 查找商品</el-menu-item
        >
      </el-menu-item-group>
    </el-sub-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { Grid } from '@element-plus/icons-vue';

export default defineComponent({
  components: {
    Grid
  },
  setup() {
    const router = useRouter();

    const jumpToAllGoods = () => router.push('/main/allGoods');
    const jumpToGoodsSearch = () => router.push('/main/searchGoods');

    return {
      jumpToAllGoods,
      jumpToGoodsSearch
    };
  }
});
</script>

<style scoped></style>
