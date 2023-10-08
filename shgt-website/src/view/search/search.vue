<template>
  <div class="search">
    <el-input
      type="text"
      v-model="searchMessage"
      class="w-50 m-2"
      placeholder="输入搜索内容"
      maxlength="50"
    >
    </el-input>
    <el-button @click="searchBtn" type="primary" :icon="Search">搜索</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { Search } from '@element-plus/icons-vue';

export default defineComponent({
  setup() {
    const store = useStore();
    const searchMessage = ref('');
    const searchBtn = () => {
      store.dispatch('getSearchGoods', searchMessage.value);
    };
    return {
      Search,
      searchMessage,
      searchBtn
    };
  }
});
</script>

<style scoped>
.search {
  margin-top: 10px;
  display: flex;
  margin: 10px 300px;
}
</style>
