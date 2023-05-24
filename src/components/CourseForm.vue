<template>
    <el-form @submit="onSubmit">
      <el-form-item label="Name" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Description" prop="description">
        <el-input type="textarea" v-model="form.description"></el-input>
      </el-form-item>
      <el-form-item label="Teacher" prop="teacher">
        <el-input v-model="form.teacher"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">Create Course</el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  let form = ref({
    name: '',
    description: '',
    teacher: '',
  });
  
  const onSubmit = (e) => {
    e.preventDefault();
    emit('submit', form.value);
  };
  </script>
  