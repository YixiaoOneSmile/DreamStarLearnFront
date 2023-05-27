import axios from 'axios';

// 登录
export const login = async (id, password) => {
  
  try {
    const data = {id,password}
    const response = await axios.post('http://localhost:3000/user/login', data);
    return response
  } catch (error) {
    throw new Error(error);
  }
};

// 注册
export const register = async (id, password) => {
  try {
    const response = await axios.post('http://localhost:3000/user/register', {
      id: id,
      password: password,
    });
    
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

// 获取课程
export const getCourses = async () => {
  try {
    const response = await axios.get('http://localhost:3000/getAllCourses');
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

// 获取单个课程
export const getCourse = async (courseId) => {
  try {
    const response = await axios.get(`http://localhost:3000/getAllCourses/${courseId}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

// 创建课程
export const createCourse = async (course) => {
  try {
    const response = await axios.post('http://localhost:3000/createCourse', course);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

// 删除课程
export const deleteCourse = async (courseId) => {
  try {
    const response = await axios.post(`http://localhost:3000/deleteCourse/${courseId}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
//搜索课程
export const findCourse = async (name) => {
  try {
    const response = await axios.get(`http://localhost:3000/getCoursesByName`, {
      params: {
        name: name,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

// 创建章节
export const addChapter = async (courseId, chapterData) => {
  try {
    const response = await axios.post(`http://localhost:3000/courses/${courseId}`, chapterData);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

//上传文件
export const uploadFile = async (file) => {
  try {
    let formData = new FormData();
    formData.append('file', file);
    
    const response = await axios.post(`http://localhost:3000/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

// 创建考试

// 获取考试

// 获取所有考试

// 注册用户

// 提交考试

// 获取考试结果
