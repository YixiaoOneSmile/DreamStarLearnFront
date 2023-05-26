<template>
  <el-form @submit.native.prevent="handleSubmit">
    <el-form-item label="课程名称" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="课程描述" prop="description">
      <el-input type="textarea" v-model="form.description"></el-input>
    </el-form-item>
    <!-- <el-form-item label="Teacher" prop="teacher">
      <el-input v-model="form.teacher"></el-input>
    </el-form-item> -->
    <el-form-item>
      <el-button type="primary" native-type="submit">Create Course</el-button>
    </el-form-item>
  </el-form>
</template>
  
<script setup>
import { ref } from 'vue';
import { createCourse } from '../api/index';
let form = ref({
  name: '',
  description: '',
  teacher: '60d4b4c43995ca3174e8b4db',
  students: '60d4b4c43995ca3174e8b4dc'
});

const handleSubmit = async () => {
  try {
    const response = await createCourse(form.value) // 这里假设课程ID已经在某处获取并保存
    console.log(response)
    alert('添加成功')
    // 清空表单
    form.value = {
      name: '',
      description: '',
      teacher: '60d4b4c43995ca3174e8b4db',
      students: '60d4b4c43995ca3174e8b4dc'
    }
  } catch (error) {
    console.error(error)
  }
}
</script>
  