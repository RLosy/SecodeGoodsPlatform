<template>
  <div class="seek-user">
    <el-divider class="divder" />
    <div class="top">
      <span class="span">选择查询条件</span>
      <el-select
        v-model="value"
        class="m-2"
        placeholder="请选择查询条件"
        size="large"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <span class="span">输入查询数据</span>
      <el-input
        class="input"
        size="large"
        v-model="input"
        :placeholder="value"
        maxlength="15"
        show-word-limit
      />
      <el-button
        @click="seekBtn(value, input)"
        size="large"
        type="primary"
        :icon="Search"
        :disabled="isDisable"
        >搜索</el-button
      >
    </div>

    <el-divider class="divder" />
    <user-data />
    <el-divider class="divder" />
    <user-products :value="readonlyValue" :input="readonlyInput" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, readonly } from 'vue';
import { Search } from '@element-plus/icons-vue';
import userData from './cpns/userData.vue';
import userProducts from './cpns/userProducts.vue';
import { options } from './config';
import { seekUserControl } from './hooks/seekuserControl';

export default defineComponent({
  components: {
    userData,
    userProducts
  },
  setup() {
    const value = ref('');
    const input = ref('');

    const readonlyValue = readonly(value);
    const readonlyInput = readonly(input);

    const isDisable = ref(true);
    watch([value, input], () => {
      if (value.value !== '' && input.value !== '') {
        isDisable.value = false;
      } else {
        isDisable.value = true;
      }
    });

    const { seekBtn } = seekUserControl();

    return {
      options,
      value,
      input,
      Search,
      seekBtn,
      isDisable,
      readonlyValue,
      readonlyInput
    };
  }
});
</script>

<style scoped>
.seek-user {
  height: 100%;
  width: 100%;
}
.top {
  display: flex;
  justify-content: space-around;
}
.input {
  width: 300px;
}
.span {
  color: #606266;
  font-size: 19px;
  line-height: 38px;
}
</style>
