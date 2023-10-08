<template>
  <div class="login">
    <login-panel></login-panel>
    <el-link type="primary" class="link" @click="jumpToRegister"
      >没有账号？点击注册</el-link
    >
    <el-button @click="loginBtn" type="primary" round class="loginbtn"
      >点击登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import axios from 'axios';
import { ElMessage } from 'element-plus';
import loginPanel from './cpns/login-panel.vue';

export default defineComponent({
  components: {
    loginPanel
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    let { REaccount, REpassword } = route.params;

    const account = ref(REaccount);
    const password = ref(REpassword);

    provide('account', account);
    provide('password', password);

    const loginError = () => {
      ElMessage({
        message: '账号或密码错误！！',
        type: 'error',
        offset: 30
      });
    };
    const loginSuccess = () => {
      ElMessage({
        message: '登录成功！！',
        type: 'success',
        offset: 30
      });
    };

    const loginBtn = async () => {
      const result = await axios({
        method: 'POST',
        url: '/api/login',
        data: {
          account: account.value,
          password: password.value
        }
      });

      if (result.data.stataCode === 401) {
        loginError();
        return;
      }

      loginSuccess();
      store.commit('storeToken', result.data);
      router.push('/main');
    };

    const jumpToRegister = () => {
      router.push('/register');
    };

    return {
      jumpToRegister,
      loginBtn
    };
  }
});
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.loginbtn {
  width: 224px;
}
.link {
  margin: 5px 0;
}
</style>
