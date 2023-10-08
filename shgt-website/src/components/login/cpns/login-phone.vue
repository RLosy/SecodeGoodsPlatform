<template>
  <div>
    <el-form ref="ruleFormRef" status-icon class="demo-ruleForm">
      <el-form-item label="手机号码" prop="pass">
        <el-input
          type="text"
          autocomplete="off"
          v-model="phoneMsg.phone"
        ></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="checkPass" id="vericode">
        <el-input
          type="text"
          autocomplete="off"
          v-model="phoneMsg.verificationCode"
        ></el-input>
        <el-button type="primary" round size="small" class="codebtn"
          >验证码</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const phoneMsg = reactive({
      phone: '',
      verificationCode: ''
    });
    return {
      phoneMsg
    };
  }
});
</script>

<style scoped>
#vericode {
  position: relative;
  width: 130px;
  margin-left: 13px;
}
.codebtn {
  position: absolute;
  top: 5px;
  right: -58px;
  width: 50px;
}
</style>
