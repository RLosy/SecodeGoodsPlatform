<template>
  <div>
    <el-button type="info" @click="jumpToLogin">
      登录<el-icon class="el-icon--right"><User /></el-icon>
    </el-button>

    <el-divider direction="vertical"></el-divider>

    <el-button type="info" @click="jumpToRegister">
      注册<el-icon class="el-icon--right"><Edit /></el-icon>
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { User, Edit } from '@element-plus/icons-vue';

export default defineComponent({
  components: {
    User,
    Edit
  },
  setup() {
    const router = useRouter();
    const jumpToLogin = () => {
      router.push('/login');
    };
    const jumpToRegister = () => {
      router.push('/register');
    };
    return {
      jumpToLogin,
      jumpToRegister
    };
  }
});
</script>

<style scoped></style>
