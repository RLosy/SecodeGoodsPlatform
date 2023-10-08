<template>
  <div class="login-panel">
    <el-tabs type="border-card" class="demo-tabs">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <!-- <el-icon><user /></el-icon> -->
            <span class="span">账号登录</span>
          </span>
        </template>
        <login-acount />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { User } from '@element-plus/icons-vue';
import loginAcount from './login-acount.vue';

export default defineComponent({
  components: {
    // User,
    loginAcount
  },
  setup() {
    return {};
  }
});
</script>

<style scoped>
.login-panel {
  width: 224px;
  height: 200px;
}
.span {
  display: inline-block;
  text-align: center;
  margin-left: 70px;
  margin-right: 55px;
}
</style>
