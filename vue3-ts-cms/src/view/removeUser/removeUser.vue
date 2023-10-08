<template>
  <div class="remove-user">
    <ul class="ul">
      <user-title />
      <el-divider />
      <li class="for-li" v-for="user in allUsers" :key="user.id">
        <tr class="avatar">
          <td>
            <el-avatar class="avatarinfo" :size="70" :src="user.avatar" />
          </td>
          <td class="tr">{{ user.id }}</td>
          <td class="tr">{{ user.account }}</td>
          <td class="tr">{{ user.telNumber }}</td>
          <td class="tr">{{ user.nickName }}</td>
          <td class="tr">{{ user.updateAt.split('T')[0] }}</td>
          <td class="tr">{{ user.createAt.split('T')[0] }}</td>
          <td>
            <el-popconfirm
              confirmButtonText="确定"
              cancelButtonText="取消"
              title="您确定要删除此用户吗?"
              @confirm="confirmBtn(user.id, user.nickName)"
            >
              <template #reference>
                <el-button type="primary" :icon="Delete" circle />
              </template>
            </el-popconfirm>
          </td>
        </tr>
      </li>
      <el-divider />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { Delete } from '@element-plus/icons-vue';
import userTitle from './cpns/userTitle.vue';
import { confirmDeleteUser } from './hooks/removeUser';

export default defineComponent({
  components: {
    userTitle
  },
  setup() {
    const store = useStore();
    const allUsers = computed(() => store.state.AllUsers);

    const { confirmBtn } = confirmDeleteUser();

    return {
      Delete,
      allUsers,
      confirmBtn
    };
  }
});
</script>

<style scoped>
.remove-user {
  height: 100%;
  width: 100%;
  overflow: scroll;
}
.ul {
  list-style: none;
}
.for-li {
  line-height: 30px;
}
tr td {
  width: 136px;
  height: 100px;
  border: 1px solid #dcdfe6;
  text-align: center;
  line-height: 50px;
}
.avatar {
  position: relative;
}
.avatarinfo {
  position: absolute;
  top: 14px;
  left: 29px;
}
.btn {
  position: absolute;
  top: 30px;
  right: 50px;
}
.tr {
  line-height: 100px;
}
</style>
