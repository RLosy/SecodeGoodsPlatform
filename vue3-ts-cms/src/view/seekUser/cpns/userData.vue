<template>
  <div class="user-data">
    <div class="li-title">
      <li class="li-title" v-for="title in userTitle" :key="title">
        {{ title }}
      </li>
    </div>
    <el-divider />
    <tr>
      <td class="avatar">
        <el-avatar class="avatarinfo" :size="70" :src="userData.avatar" />
      </td>
      <td>{{ userData.id }}</td>
      <td>{{ userData.account }}</td>
      <td>{{ userData.telNumber }}</td>
      <td>{{ userData.nickName }}</td>
      <td>
        <span v-if="isShow"></span>
        <span v-else>{{ userData.updateAt.split('T')[0] }}</span>
      </td>
      <td>
        <span v-if="isShow"></span>
        <span v-else>{{ userData.updateAt.split('T')[0] }}</span>
      </td>
      <td>{{ length }}</td>
    </tr>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue';
import { useStore } from 'vuex';
import { userTitle } from '../config';

export default defineComponent({
  setup() {
    const store = useStore();
    const isShow = ref(true);

    const userData = computed(() => store.state.certainUser.userData);
    const length = computed(() => store.state.certainUser.userProducts.length);

    watch(userData, () => {
      isShow.value = false;
    });

    return {
      userData,
      userTitle,
      isShow,
      length
    };
  }
});
</script>

<style scoped>
.li-title {
  display: flex;
  justify-content: space-around;
}
tr td {
  width: 144px;
  height: 94px;
  line-height: 91px;
  border: 1px solid #dcdfe6;
  text-align: center;
}
.avatar {
  position: relative;
}
.avatarinfo {
  position: absolute;
  top: 13px;
  right: 38px;
}
</style>
