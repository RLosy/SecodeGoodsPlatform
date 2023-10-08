<template>
  <div class="search-condition">
    <div class="span">选择查询条件</div>
    <el-select
      @change="change"
      v-model="value1"
      class="m-2"
      placeholder="选择条件"
      size="large"
    >
      <el-option
        v-for="item in conditionOptions"
        :key="item.value"
        :value="item.value"
      />
    </el-select>
    <div class="by-id" v-if="showFlage">
      <el-input
        maxlength="10"
        size="large"
        v-model="input"
        placeholder="输入商品id"
      >
        <template #prepend> <span>商品id</span></template></el-input
      >
    </div>
    <div class="by-category" v-else>
      <span class="span">选择分类</span>
      <el-select
        v-model="value2"
        class="m-2"
        placeholder="选择分类"
        size="large"
        @change="categoryChange"
      >
        <el-option
          v-for="item in categoryOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>

    <el-button @click="searchBtn" size="large" type="primary">查询</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { conditionOptions, categoryOptions } from '../hooks/config';

export default defineComponent({
  setup() {
    const store = useStore();
    const value1 = ref('');
    const value2 = ref('');
    const input = ref();
    const showFlage = ref(true);

    const change = (value: string) => {
      if (value === '1.根据商品id') {
        showFlage.value = true;
        return;
      }
      showFlage.value = false;
    };

    const searchBtn = () => {
      const condition = value1.value.split('.')[0];
      switch (condition) {
        case '1':
          store.dispatch('getProductsById', input.value);

          break;
        case '2':
          store.dispatch('getProductsByCategory', value2.value);

          break;
        default:
          break;
      }
    };
    const categoryChange = () => {
      searchBtn();
    };

    return {
      conditionOptions,
      categoryOptions,
      value1,
      value2,
      change,
      input,
      showFlage,
      searchBtn,
      categoryChange
    };
  }
});
</script>

<style scoped>
.search-condition {
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
}
.by-id {
  display: flex;
  justify-content: space-around;
  width: 300px;
}
.span {
  margin-right: 20px;
  color: #a8abb2;
}
</style>
