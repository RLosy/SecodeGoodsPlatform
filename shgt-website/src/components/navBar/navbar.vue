<template>
  <div class="navbar">
    <login-state class="login-state" v-if="flage" />
    <loginandregister v-else />

    <mainlink />

    <msglink />

    <shopcarlink />

    <homelink />

    <!-- <connectionlink /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import homelink from './cpns/homelink.vue';
import mainlink from './cpns/mainlink.vue';
import msglink from './cpns/msglink.vue';
import shopcarlink from './cpns/shopcarlink.vue';
// import connectionlink from './cpns/connectionlink.vue';
import loginandregister from './cpns/loginandregister.vue';
import loginState from './cpns/loginState.vue';

export default defineComponent({
  components: {
    homelink,
    mainlink,
    msglink,
    shopcarlink,
    // connectionlink,
    loginandregister,
    loginState
  },
  setup() {
    const flage = localStorage.getItem('userToken');
    return {
      flage
    };
  }
});
</script>

<style scoped>
.navbar {
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 30px;
  background-color: #99a9bf;
  padding-top: 10px;
  padding-bottom: 8px;
}
</style>
