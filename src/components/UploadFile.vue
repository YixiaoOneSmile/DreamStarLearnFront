<template>
    <el-upload
      :action="uploadUrl"
      :before-upload="beforeUpload"
      :on-success="handleSuccess"
      :on-error="handleError">
      <el-button slot="trigger" size="small" type="primary">点击上传</el-button>
    </el-upload>
  </template>
  
  <script setup>
  
  const props = defineProps({
    uploadUrl: {
      type: String,
      required: true,
    },
    onUploadSuccess: {
      type: Function,
      default: () => {},
    },
    onUploadError: {
      type: Function,
      default: () => {},
    },
  })
  
  const handleSuccess = (response, file, fileList) => {
    props.onUploadSuccess(response, file, fileList);
  }
  
  const handleError = (err, file, fileList) => {
    props.onUploadError(err, file, fileList);
  }
  
  const beforeUpload = (file) => {
    console.log(file);
  }
  </script>
  