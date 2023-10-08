<template>
  <div class="update">
    <el-card class="update_card" shadow="hover">
      <div class="content">
        <div class="current">
          当前头像
          <el-divider />
          <el-avatar :size="90" :src="avatar" />
          <el-divider />
          <p>当前昵称：{{ nickName }}</p>
          <el-divider />
          <p>当前账号：{{ account }}</p>
          <el-divider />
          <p>当前个性签名：</p>
          <el-divider />
          <p>当前个人简介：</p>
          <el-divider />
        </div>

        <el-divider class="divder" direction="vertical" />

        <div class="will_update">
          <el-upload
            ref="uploadRef"
            class="upload-demo"
            action="/api/update/avatar"
            :auto-upload="false"
            list-type="picture"
            name="avatar"
            :headers="headers"
            :limit="1"
          >
            <template #trigger>
              <el-button round type="primary">选择新头像</el-button>
            </template>
            <el-divider />
            <el-button round class="ml-3" type="primary" @click="submitUpload">
              点击上传新头像
            </el-button>
          </el-upload>
          <el-divider />
          <p>
            <el-input
              @input="isNull1"
              clearable
              show-word-limit
              maxlength="7"
              class="input"
              v-model="newNickName"
              placeholder="输入新昵称~~"
            />
            <el-button
              :disabled="isDisable1"
              @click="updateNickName"
              type="primary"
              round
              >修改昵称</el-button
            >
          </p>
          <el-divider />
          <p>
            <el-input
              @input="isNull2"
              clearable
              show-password
              maxlength="40"
              class="input"
              v-model="newPassword"
              placeholder="输入新密码~~"
            />
            <el-button
              :disabled="isDisable2"
              @click="updatePassword"
              type="primary"
              round
              >修改密码</el-button
            >
          </p>
          <el-divider />
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from 'vue';
import type { ElUpload } from 'element-plus';
import { useStore } from 'vuex';
import { checkClick } from './hooks/checkClick';

export default defineComponent({
  setup() {
    const {
      newNickName,
      newPassword,
      updateNickName,
      updatePassword,
      isDisable1,
      isDisable2,
      isNull1,
      isNull2
    } = checkClick();

    const store = useStore();
    const uploadRef = ref<InstanceType<typeof ElUpload>>();

    const rowHeaders = {
      Authorization: 'Bearer ' + localStorage.getItem('userToken')
    };
    const headers = ref(rowHeaders);

    const user = reactive(store.state.user);
    const { account, avatar, nickName } = toRefs(user);

    const submitUpload = () => {
      uploadRef.value!.submit();
    };

    return {
      uploadRef,
      account,
      avatar,
      nickName,
      submitUpload,
      headers,
      newNickName,
      newPassword,
      updateNickName,
      updatePassword,
      isDisable1,
      isDisable2,
      isNull1,
      isNull2
    };
  }
});
</script>

<style scoped>
.update,
.update_card,
.content {
  height: 100%;
  height: 100%;
}
.content {
  display: flex;
  justify-content: space-between;
}
.divder {
  height: 575px;
}
.current,
.will_update {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.input {
  margin-bottom: 20px;
}
</style>
