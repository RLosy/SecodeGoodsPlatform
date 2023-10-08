<template>
  <div class="register-panel">
    <el-tabs type="border-card" stretch>
      <el-tab-pane label="注册账号">
        <el-form :model="registerMsg" label-width="60px">
          <el-form-item label="手机">
            <el-input
              :maxlength="11"
              v-model="registerMsg.telNumber"
            ></el-input>
          </el-form-item>
          <el-form-item label="账号">
            <el-input v-model="registerMsg.account"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              type="password"
              v-model="registerMsg.password"
              show-password
            ></el-input>
          </el-form-item>
        </el-form>
        <el-link type="primary" class="link" @click="jumpToMain"
          >游客模式，无需登录</el-link
        >
        <el-button
          @click="registerBtn"
          type="primary"
          round
          class="register-btn"
          >点击注册</el-button
        >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { rules } from '../hooks/registerRules';
import { checkRegister } from '../hooks/registerCheck';

export default defineComponent({
  setup() {
    const router = useRouter();

    const registerMsg = reactive({
      telNumber: '',
      account: '',
      password: ''
    });

    const { check, registerSuccess, isExist } = checkRegister(registerMsg);
    const registerBtn = async () => {
      const res = check();
      if (res) {
        return;
      }

      const result = await axios({
        method: 'POST',
        url: '/api/register',
        data: {
          registerMsg
        }
      });

      if (result.data.stataCode === 409) {
        isExist();
        return;
      }

      router.push({
        name: 'login',
        path: '/login',
        params: {
          REaccount: registerMsg.account,
          REpassword: registerMsg.password
        }
      });
      registerSuccess();
    };

    const jumpToMain = () => {
      console.log(22);
      router.push('/main');
    };

    return {
      registerMsg,
      registerBtn,
      rules,
      jumpToMain
    };
  }
});
</script>

<style scoped>
.register-panel {
  width: 224px;
  height: 200px;
}
.is-top {
  display: flex;
  flex: 1;
  background-color: red;
}
.register-btn {
  width: 200px;
}
.link {
  margin: 10px 33px;
}
</style>
