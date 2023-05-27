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
    <el-form-item label="课程图标" prop="imgURL">
      <UploadFile uploadUrl="http://localhost:3000/upload/CourseImg" :onUploadSuccess="handleSuccess"
        :onUploadError="handleError"></UploadFile> <!-- 对文件上传进行封装 -->
    </el-form-item>
    <el-form-item label="课程图标地址" prop="imgURL">
      <el-input v-model="form.img" />
    </el-form-item>
    <el-button type="primary" native-type="submit">Create Course</el-button>
  </el-form>
</template>
  
<script setup>
import { ref } from 'vue';
import { createCourse } from '../api/index';
import UploadFile from '../components/UploadFile.vue';
let form = ref({
  name: '',
  description: '',
  img: '',
  teacher: '60d4b4c43995ca3174e8b4db',
  students: '60d4b4c43995ca3174e8b4dc'
});
//文件上传
const handleSuccess = (response, file, fileList) => {
  form.value.img = response.fileUrl;
};

const handleError = (err, file, fileList) => {
  console.error(err);
};

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
  