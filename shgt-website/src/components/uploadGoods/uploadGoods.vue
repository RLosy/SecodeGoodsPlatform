<template>
  <div class="upload-goods">
    <el-card class="box-card">
      <el-upload
        ref="uploadRef"
        class="upload-demo"
        action="/api/upload/goods"
        :auto-upload="false"
        :headers="headers"
        :limit="1"
        list-type="picture"
        multiple
        :on-success="success"
        :data="{ description, checkList, category }"
      >
        <el-divider />

        <el-input
          v-model="description"
          :rows="4"
          type="textarea"
          placeholder="请输入商品描述"
          show-word-limit
          :maxlength="100"
        />

        <el-divider />

        <el-radio-group class="radio" v-model="category">
          <el-radio v-for="item in categorys" :key="item" :label="item">{{
            item
          }}</el-radio>
        </el-radio-group>

        <el-divider />

        <el-checkbox-group class="choise" v-model="checkList">
          <el-checkbox label="售卖" />
          <el-checkbox label="交换" />
        </el-checkbox-group>

        <template #trigger>
          <el-button size="large" type="primary">选择图片</el-button>
        </template>

        <el-divider />

        <el-button size="large" type="primary" @click="submitUpload"
          >点击上传</el-button
        >

        <el-divider />

        <template #tip>
          <div class="el-upload__tip">只能上传一张图片，请精心选择！！</div>
        </template>
      </el-upload>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { ElUpload } from 'element-plus';
import { uploadSuccess } from '@/hooks/message';

export default defineComponent({
  setup() {
    const rowHeaders = {
      Authorization: 'Bearer ' + localStorage.getItem('userToken')
    };
    const headers = ref(rowHeaders);

    const uploadRef = ref<InstanceType<typeof ElUpload>>();

    const categorys = ref([
      '书籍',
      '生活用品',
      '交通工具',
      '宿舍用品',
      '精美物件',
      '美味食物'
    ]);

    const category = ref(categorys.value[0]);

    const description = ref('');
    const checkList = ref(['售卖']);

    const success = () => {
      uploadSuccess();
    };

    const submitUpload = () => {
      uploadRef.value!.submit();
    };

    return {
      headers,
      uploadRef,
      submitUpload,
      description,
      checkList,
      categorys,
      category,
      success
    };
  }
});
</script>

<style scoped>
.upload-goods {
  width: 80%;
  height: 100%;
  margin: 0 auto;
}
.box-card {
  width: 100%;
  height: 99%;
}
.upload-demo {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.choise {
  display: flex;
  justify-content: space-around;
}
.radio {
  display: flex;
  justify-content: space-around;
}
</style>
