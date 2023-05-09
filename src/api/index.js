import axios from 'axios';

//登录
export const login = async (id, password) => {
  try {
    const response = await axios.post('http://localhost:3000/user/login', {
      id: id,
      password: password,
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
//注册
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
//获取课程
export const getCourses = async () => {
  try {
    const response = await axios.get('http://localhost:3000/getAllCourses');
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCourse = async (courseId) => {
  try {
    const response = await axios.get(`http://localhost:3000/getAllCourses/${courseId}`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};


export const createCourse = async (course) => {
  const response = await axios.post('http://localhost:3000/createCourse', course);
  return response.data;
}

export const createChapter = async (courseId, chapterData) => {
  const response = await axios.post(`http://localhost:3000/courses/${courseId}`, chapterData);
  return response;
};

export const createExam = async () => {

}
export const getExam = async () => {

}
export const getExams = async () => {

}
export const registerUser = async () => {

}
export const submitExam = async () => {

}

export const getExamResult = async () => {

}