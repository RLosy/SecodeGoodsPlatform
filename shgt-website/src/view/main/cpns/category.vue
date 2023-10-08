<template>
  <div class="category">
    <el-link
      @click="getCategoryGoods(item)"
      type="primary"
      v-for="item in categorys"
      :key="item"
      >{{ item }}</el-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { gategoryController } from '../hooks/getCategory';

export default defineComponent({
  setup() {
    const { getCategoryGoods } = gategoryController();

    const categorys = ref([
      '全部商品',
      '书籍',
      '生活用品',
      '交通工具',
      '宿舍用品',
      '精美物件',
      '美味食物'
    ]);

    return {
      categorys,
      getCategoryGoods
    };
  }
});
</script>

<style scoped>
.category {
  display: flex;
  justify-content: space-around;
  height: 40px;
  width: 58%;
  margin: 0 auto;
}
</style>
