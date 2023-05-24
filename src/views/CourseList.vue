<template>
  <div class="main" >
    <div class="left">
      <div class="section">
        <h2 class="section-title">推荐</h2>
        <div class="item-grid">
          <div class="item1">
            <a href="https://www.w3school.com.cn/">
              <img src="../assets/w3cschool.png" >
            </a>
          </div>

          <div class="item1" >
            <a href="https://www.freecodecamp.org/">
              <img src="../assets/freecodecamp.jpg" >
            </a>
          </div>

          <div class="item1">
            <a href="your-link-url-3">
              <img src="https://pic.leetcode.cn/1684735031-rsAhYD-fc9d2431-bd88-48fd-b19b-e9e6c56794fa.png?x-oss-process=image%2Fformat%2Cwebp" alt="描述图片的替代文本">
            </a>
          </div>
        </div>
      </div>
      <div class="section">
        <h2 class="section-title">启梦课程</h2>
        <div class="item-grid">
          <div class="item" v-for="course in courses" :key="course._id">

            <div class="item-image">
              <router-link :to="`/courses/${course._id}`">
                <img src="../assets/纸飞机.png" class="item-img">
              </router-link>
            </div>
            <div class="item-content">
              <router-link :to="`/courses/${course._id}`">
                <div class="item-title">{{ course.name }}</div>
                <div class="item-description">{{ course.description.substring(0, 10) }}</div>
              </router-link>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="liu"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getCourses } from '../api/index';

const courses = ref([]);
const imageSource=ref("")




onMounted(async () => {
  try {
    const response = await getCourses();
    courses.value = response.data.data;
  } catch (error) {
    // 显示错误信息
  }
});

</script>

<style scoped>
.main {
  display: flex;
  margin: 10vh 10vw;
  justify-content: space-between;
}

.left {
  flex: 4;
}

.right {
  flex: 1;
}

.section {
  margin-bottom: 2em;
}

.section-title {
  color: #5e6872;
  font-size: 1.5em;
  margin-bottom: 1em;
}

.item-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content:flex-start;
}

.item1 {
  width: 30%;
  display: flex;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 6px, rgba(0, 0, 0, 0.02) 0px 4px 8px, rgba(0, 0, 0, 0.02) 0px 6px 12px;
  transition: all 0.3s ease 0s;
  border-radius: 8px;
  margin: 10px;
  overflow: hidden;
  width: 30%;
  height: 150px;
  transition: transform 0.3s ease;
}

.item1 img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
 
}

.item1:hover {
  transform: translateY(-5px); /* 在鼠标悬停时向上浮动5像素 */
}

.item {
  width: 30%;
  display: flex;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 6px, rgba(0, 0, 0, 0.02) 0px 4px 8px, rgba(0, 0, 0, 0.02) 0px 6px 12px;
  transition: all 0.3s ease 0s;
  border-radius: 8px;
  margin: 10px;
  overflow: hidden;
}


.item-image {
  flex: 1;
}

.item-img {
  width: 100px;
  height: 100px;
  display: block;
}

.item-content {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
}

.item-title,
.item-description {
  /* Removed padding here */
}

.liu {
  width: 100%;
  height: 500px;
  background-color: aqua;
}
</style>
