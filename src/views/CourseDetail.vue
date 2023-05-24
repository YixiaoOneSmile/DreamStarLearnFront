<template>
    <el-layout style="padding: 24px">
      <el-row :gutter="24">
        <el-col :span="24">
          <h2 class="title">{{ course.name }}</h2>
          <el-card>
            <el-descriptions title="Course Description" :column="1">
              <el-descriptions-item>{{ course.description }}</el-descriptions-item>
            </el-descriptions>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card title="Chapters">
            <el-menu mode="vertical">
              <el-menu-item 
                v-for="chapter in course.chapters"
                :key="chapter._id"
                @click="handleChapterSelect(chapter)"
              >
                <template v-if="chapter.type === 'video'">
                  <video-camera-outlined /> {{ chapter.title }}
                </template>
                <template v-else>
                  <file-pdf-outlined /> {{ chapter.title }}
                </template>
              </el-menu-item>
            </el-menu>
          </el-card>
        </el-col>
        <el-col :span="18">
          <div v-if="selectedChapter">
            <h2>{{ selectedChapter.title }}</h2>
            <p>{{ selectedChapter.description }}</p>
            <div v-if="selectedChapter.videoURL">
              <video controls width="100%" height="auto">
                <source :src="selectedChapter.videoURL" type="video/mp4" />
              </video>
            </div>
            <div v-else-if="selectedChapter.pdfURL">
              <h3>PDF</h3>
              <embed :src="selectedChapter.pdfURL" width="100%" height="500" type="application/pdf" style="display: block; margin: 0 auto"/>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-layout>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { getCourse } from '../api/index.js';
 
  
  const course = ref({});
  const selectedChapter = ref(null);
  const route = useRoute();
  
  onMounted(async () => {
    try {
        console.log(route.params.courseId)
      const response = await getCourse(route.params.courseId);
      course.value = response.data;
    } catch (error) {
      // 显示错误信息
    }
  });
  
  const handleChapterSelect = (chapter) => {
    selectedChapter.value = chapter;
  };
  </script>
  