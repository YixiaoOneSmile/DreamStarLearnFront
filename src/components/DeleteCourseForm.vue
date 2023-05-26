<template>
    <el-form :model="chapterForm" @submit.native.prevent="handleSubmit" label-width="120px">
      <el-form-item label="课程名称" prop="course">
        <el-select v-model="selectedCourse" placeholder="请选择">
          <el-option v-for="course in courses" :key="course._id" :label="course.name" :value="course._id" >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">deldete Course</el-button>
      </el-form-item>
    </el-form>
  </template>
<script setup>
import { ref ,onMounted} from 'vue'
import { deleteCourse,findCourse} from '../api/index.js'

let selectedCourse = ref(null); // 保存用户选择的课程
let courses = ref([]); // 课程列表
onMounted(async () => {
  try {
    const response = await findCourse("")
    courses.value.splice(0, courses.value.length, ...response.data) // 使用splice方法替换整个数组
  } catch (error) {
    console.error(error);
  }
});


const handleSubmit = async () => {
  try {
    if (!selectedCourse.value) {
      alert('请先选择课程');
      return;
    }
    const courseID = selectedCourse.value; // 获取选择的课程ID
    const response = await deleteCourse(courseID) // 这里假设课程ID已经在某处获取并保存
    //更新课程列表
    const responses = await findCourse("")
    courses.value.splice(0, courses.value.length, ...responses.data)
    alert('删除成功')
  } catch (error) {
    console.error(error)
  }
}
</script>
