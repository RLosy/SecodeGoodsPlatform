<template>
  <div class="upload">
    <el-upload
      ref="uploadRef"
      class="upload-demo"
      action="http://localhost:8000/adverts/upload"
      :auto-upload="false"
      name="advert"
      multiple
      :limit="4"
      list-type="picture"
      :data="{ input, selectValue }"
    >
      <el-divider class="divider" direction="vertical" />
      <el-input
        class="input"
        size="large"
        v-model="input"
        placeholder="输入商家"
        :maxlength="20"
      />
      <el-divider class="divider" direction="vertical" />
      <el-select
        v-model="selectValue"
        class="m-2"
        placeholder="选择分组"
        size="large"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-divider class="divider" direction="vertical" />
      <template #trigger>
        <el-button size="large" type="primary">选择图片</el-button>
      </template>

      <el-button size="large" class="ml-3" type="primary" @click="submitUpload">
        上传
      </el-button>

      <template #tip>
        <div class="el-upload__tip">一次最多上传四张图片！！</div>
      </template>
    </el-upload>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { UploadInstance } from 'element-plus';
import { messageOut } from '@/hooks/messageHooks';

export default defineComponent({
  setup() {
    const uploadRef = ref<UploadInstance>();
    const input = ref();
    const selectValue = ref();
    const options = [
      {
        value: '首页轮播广告'
      },
      {
        value: '个人主页轮播广告'
      }
    ];

    const submitUpload = () => {
      uploadRef.value!.submit();
      messageOut('上传成功！！', 'success');
    };
    return {
      uploadRef,
      submitUpload,
      input,
      options,
      selectValue
    };
  }
});
</script>

<style scoped>
.upload {
  width: 100%;
  height: 100%;
  padding: 20px;
}
.input {
  width: 300px;
}
.divider {
  margin: 10px 66px;
}
</style>
