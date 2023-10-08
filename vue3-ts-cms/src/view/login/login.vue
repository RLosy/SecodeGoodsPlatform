<template>
  <div class="login">
    <h2 class="title">网站后台管理系统</h2>
    <el-form status-icon label-width="120px" class="login-form">
      <el-form-item label="账号">
        <el-input
          v-model.trim="loginMsg.account"
          type="text"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          show-password
          v-model.trim="loginMsg.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>

      <el-form-item>
        <el-button class="submitBtn" type="primary" @click="loginSubmit"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useLogin } from './hooks/useLongin';

export default defineComponent({
  setup() {
    const router = useRouter();

    const loginMsg = reactive({
      account: '',
      password: ''
    });

    const { loginSubmit } = useLogin(loginMsg, router);

    // const submit = () => {
    //   console.log(loginMsg);
    //   router.push('/main');
    // };

    return {
      loginMsg,
      loginSubmit
    };
  }
});
</script>

<style scoped>
.login {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-form {
  width: 400px;
  height: 350px;
}
.submitBtn {
  width: 100%;
}
.title {
  margin-left: 85px;
}
</style>
