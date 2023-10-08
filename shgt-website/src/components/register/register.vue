<template>
  <div class="register">
    <register-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import registerPanel from './cpns/registerPanel.vue';

export default defineComponent({
  components: {
    registerPanel
  },
  setup() {
    return {};
  }
});
</script>

<style scoped>
.register {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
