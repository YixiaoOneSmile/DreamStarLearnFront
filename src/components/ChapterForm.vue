<template>
  <el-form :model="chapterForm" @submit.native.prevent="handleSubmit" label-width="120px">
    <el-form-item label="章节标题" prop="title">
      <el-input v-model="chapterForm.title" />
    </el-form-item>

    <el-form-item label="章节描述" prop="description">
      <el-input type="textarea" v-model="chapterForm.description" />
    </el-form-item>

    <el-form-item label="视频URL" prop="videoURL">
      <el-input v-model="chapterForm.videoURL" />
    </el-form-item>

    <el-form-item label="PDF URL" prop="pdfURL">
      <el-input v-model="chapterForm.pdfURL" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" native-type="submit">添加章节</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref } from 'vue'
import { addChapter } from '../api/index.js'

let chapterForm = ref({
  title: '',
  description: '',
  videoURL: '',
  pdfURL: ''
})

const handleSubmit = async () => {
  try {
    const response = await addChapter(chapterForm.value) // 这里假设课程ID已经在某处获取并保存
    console.log(response)
    // 清空表单
    chapterForm.value = {
      title: '',
      description: '',
      videoURL: '',
      pdfURL: ''
    }
  } catch (error) {
    console.error(error)
  }
}
</script>
