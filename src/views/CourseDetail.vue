<template>
  <div class="layout">
    <div class="row">
      <h2 class="title">{{ course.name }}</h2>
      <div class="card">
        <h3 class="card-title">课程详情</h3>
        <p class="card-desc">{{ course.description }}</p>
      </div>
    </div>
    <div class="flex-container">

      <div class="content">
        <div v-if="selectedChapter">
          <h2>{{ selectedChapter.title }}</h2>
          <p>{{ selectedChapter.description }}</p>
          <div class="video-container">
            <video :key="selectedChapter.videoURL" controls class="video-player">
              <source :src="selectedChapter.videoURL" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div class="sidebar">
        <div class="card">
          <h3 class="card-title">课程列表</h3>
          <ul class="chapter-list">
            <li v-for="chapter in course.chapters" :key="chapter._id" @click="handleChapterSelect(chapter)"
              class="chapter-item">
              {{ chapter.title }}
              <span v-if="chapter.type === 'video'">📹</span>
              <span v-else>📄</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
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
  console.log(selectedChapter.value)
};
</script>

<style scoped>
.layout {
  padding: 24px;
}

.row {
  margin-bottom: 24px;
}

.flex-container {
  display: flex;
  justify-content: space-between;
}

.sidebar {
  width: 20%;
  margin-right: 24px;
}

.content {
  width: 75%;
}
.video-container {
    width: 80%;  /* 或者你想要的宽度百分比 */
    max-width: 80vw;  /* 防止视频宽度过宽，超出视口 */
    height: 60vh;  /* 高度设置为视口的一部分，也可以设置为固定像素值 */
    margin: 0 auto;  /* 让播放器在水平方向上居中 */
    position: relative;
    overflow: hidden; /* 防止视频内容超出容器 */
  }

  .video-player {
    width: 100%;
    height: 100%;
    position: absolute; /* 使用绝对定位让 video 元素填充其父元素 */
    object-fit: contain;  /* 让视频自动适应播放器的大小，但保持原始的宽高比 */
  }

.card {
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 24px;
}

.card-title {
  font-size: 1.2em;
  margin-bottom: 0.5em;
}

.card-desc {
  margin: 0;
}

.chapter-list {
  list-style: none;
  padding: 0;
}

.chapter-item {
  cursor: pointer;
}
</style>
