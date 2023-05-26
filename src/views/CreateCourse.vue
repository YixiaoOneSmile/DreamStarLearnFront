<template>
  <el-row :style="{ height: '100vh', padding: '50px' }">
    <el-col :span="6" class="sidebar">
      <h2 class="title">课程管理</h2>
      <el-space direction="vertical" :size="middle" class="actions">
        <el-button :type="currentAction === 'create' ? 'primary' : 'default'"
          @click="setCurrentAction('create')">创建课程</el-button>
        <el-button :type="currentAction === 'add' ? 'primary' : 'default'"
          @click="setCurrentAction('add')">添加章节</el-button>
        <el-button :type="currentAction === 'delete' ? 'primary' : 'default'"
          @click="setCurrentAction('delete')">删除课程</el-button>
      </el-space>
    </el-col>
    <el-col :span="18">
      <div v-if="currentAction === 'create'">
        <h1>创建课程</h1>
        <CourseForm></CourseForm>
      </div>
      <div v-else-if="currentAction === 'add'">
        <h1>添加章节</h1>
        <ChapterForm></ChapterForm>
      </div>
      <div v-else="currentAction === 'delete'">
        <h1>删除课程</h1>
        <DeleteCourseForm></DeleteCourseForm>
      </div>
    </el-col>
  </el-row>
</template>
  
<script setup>
import { ref } from 'vue';
import CourseForm from '../components/CourseForm.vue';
import ChapterForm from '../components/ChapterForm.vue';
import DeleteCourseForm from '../components/DeleteCourseForm.vue';
let currentAction = ref('create');
const setCurrentAction = (action) => {
  currentAction.value = action;
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
  