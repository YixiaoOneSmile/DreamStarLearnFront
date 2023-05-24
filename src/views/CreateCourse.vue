<template>
    <el-row :style="{ height: '100vh', padding: '50px' }">
      <el-col :span="6" class="sidebar">
        <h2 class="title">课程管理</h2>
        <el-space direction="vertical" :size="middle" class="actions">
          <el-button :type="currentAction === 'create' ? 'primary' : 'default'" @click="setCurrentAction('create')">创建课程</el-button>
          <el-button :type="currentAction === 'add' ? 'primary' : 'default'" @click="setCurrentAction('add')">添加章节</el-button>
        </el-space>
      </el-col>
      <el-col :span="18">
        <div v-if="currentAction === 'create'">
          <h1>创建课程</h1>
            <CourseForm></CourseForm>
        </div>
        <div v-else="currentAction === 'add' && courseId">
          <h1>添加章节</h1>
          <ChapterForm></ChapterForm>
        </div>
      </el-col>
    </el-row>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { createCourse, addChapter } from '../api/index.js';
  import CourseForm from '../components/CourseForm.vue';
  import ChapterForm  from '../components/ChapterForm.vue';
  let courseId = ref(null);
  let currentAction = ref('create');
  
  const setCurrentAction = (action) => {
    currentAction.value = action;
  };
  
  const createCourseHandler = async (values) => {
    try {
      const response = await createCourse(values);
      courseId.value = response.data._id;
    } catch (error) {
      console.error(error);
    }
  };
  
  const createChapterHandler = async (values) => {
    if (!courseId.value) {
      console.error('Please create a course first.');
      return;
    }
  
    try {
      await addChapter(courseId.value, values);
    } catch (error) {
      console.error(error);
    }
  };
  </script>
  
  <style scoped>
  .title {
    /* 对应于原来的 Title 组件的样式 */
  }
  
  .sidebar {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  
  .actions {
    margin-top: 50px;
  }
  </style>
  