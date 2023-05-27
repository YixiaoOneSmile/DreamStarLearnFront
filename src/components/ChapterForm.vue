<template>
  <el-form :model="chapterForm" @submit.native.prevent="handleSubmit" label-width="120px">
    <el-form-item label="课程名称" prop="course">
      <el-select v-model="selectedCourse" filterable remote placeholder="请输入课程名称" :loading="loading">
        <el-option v-for="course in filteredCourses" :key="course._id" :label="course.name" :value="course._id">
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="章节标题" prop="title">
      <el-input v-model="chapterForm.title" />
    </el-form-item>

    <el-form-item label="章节描述" prop="description">
      <el-input type="textarea" v-model="chapterForm.description" />
    </el-form-item>
    <el-form-item label="课程视频" prop="imgURL">
      <UploadFile uploadUrl="http://localhost:3000/upload/CourseVedio" :onUploadSuccess="handleSuccess"
        :onUploadError="handleError"></UploadFile> 
    </el-form-item>
    <el-form-item label="视频URL" prop="videoURL">
      <el-input v-model="chapterForm.videoURL" />
    </el-form-item>

    <el-form-item v-show="false" label="PDF URL" prop="pdfURL">
      <el-input v-model="chapterForm.pdfURL" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" native-type="submit">添加章节</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref, onMounted,computed} from 'vue'
import { addChapter, findCourse } from '../api/index.js'
import UploadFile from './UploadFile.vue';
let selectedCourse = ref(null);
let courses = ref([]);
let searchText = ref('');
let loading = ref(false);
onMounted(async () => {
  try {
    const response = await findCourse("")
    courses.value.splice(0, courses.value.length, ...response.data) // 使用splice方法替换整个数组
  } catch (error) {
    console.error(error);
  }
});
let filteredCourses = computed(() => {
  if (!searchText.value) return courses.value;
  return courses.value.filter(course => course.name.includes(searchText.value));
});

let chapterForm = ref({
  title: '',
  description: '',
  videoURL: '',
  pdfURL: 'null'
})

//文件上传
const handleSuccess = (response, file, fileList) => {
  chapterForm.value.videoURL = response.fileUrl;  // 假设服务器的响应中包含文件的 URL
};

const handleError = (err, file, fileList) => {
  console.error(err);
};

const handleSubmit = async () => {
  try {
    if (!selectedCourse.value) {
      alert('请先选择课程');
      return;
    }
    const courseID = selectedCourse.value; // 获取选择的课程ID
    const response = await addChapter(courseID, chapterForm.value) // 这里假设课程ID已经在某处获取并保存
    console.log(response)
    alert('添加成功')
    // 清空表单
    chapterForm.value = {
      title: '',
      description: '',
      videoURL: '',
      pdfURL: 'null'
    }
  } catch (error) {
    console.error(error)
  }
}
</script>

