<template>
  <el-form :model="chapterForm" @submit.native.prevent="handleSubmit" label-width="120px">
    <el-form-item label="课程名称" prop="course">
      <el-select v-model="selectedCourse" placeholder="请选择">
        <el-option v-for="course in courses" :key="course._id" :label="course.name" :value="course._id">
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="章节标题" prop="title">
      <el-input v-model="chapterForm.title" />
    </el-form-item>

    <el-form-item label="章节描述" prop="description">
      <el-input type="textarea" v-model="chapterForm.description" />
    </el-form-item>
    <el-form-item label="上传视频" prop="videoURL">
    <!-- 这里直接调用了上传文件的接口，暂时还没有将这个配置在全局，所以部署应该注意这里，当然，这个接口目前需要改善 -->
      <el-upload action="http://localhost:3000/upload" accept="*" :before-upload="beforeUpload"
        :on-success="handleSuccess" :on-error="handleError">
        <el-button slot="trigger" size="small" type="primary">点击上传</el-button>
      </el-upload>

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
import { ref, onMounted } from 'vue'
import { addChapter, findCourse, uploadFile } from '../api/index.js'

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

let chapterForm = ref({
  title: '',
  description: '',
  videoURL: '',
  pdfURL: 'null'
})
//文件上传

const handleSuccess = (response, file, fileList) => {
  // handle success
  console.log(response.fileUrl);
  chapterForm.value.videoURL = response.fileUrl;  // 假设服务器的响应中包含文件的 URL
};

const handleError = (err, file, fileList) => {
  // handle error
  console.error(err);
};

const beforeUpload = (file) => {
  // 可以在此处进行文件类型、大小的检查
  console.log(file);
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

