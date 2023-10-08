<template>
  <div>
    <el-button type="info" round>
      联系我们<el-icon class="el-icon--right"><Connection /></el-icon>
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Connection } from '@element-plus/icons-vue';

export default defineComponent({
  components: {
    Connection
  },
  setup() {
    return {};
  }
});
</script>

<style scoped></style>
