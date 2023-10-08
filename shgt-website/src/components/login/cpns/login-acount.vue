<template>
  <div>
    <el-form ref="ruleFormRef" status-icon class="demo-ruleForm">
      <el-form-item label="账号" prop="pass">
        <el-input type="text" autocomplete="off" v-model="account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input
          type="password"
          autocomplete="off"
          v-model="password"
          show-password
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';

export default defineComponent({
  setup() {
    const account = inject('account');
    const password = inject('password');

    return {
      account,
      password
    };
  }
});
</script>

<style scoped></style>
