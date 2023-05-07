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
    const response = await axios.get('/api/courses');
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCourse= async (courseId) => {
    try {
      const response = await axios.get('/api/courses');
      return response;
    } catch (error) {
      throw new Error(error);
    }
  };

  export const createCourse =async()=>{

  }
  export const createExam =async()=>{
    
  }
  export const getExam =async()=>{
    
  }
  export const getExams =async()=>{
    
  }
  export const registerUser =async()=>{
    
  }
  export const submitExam =async()=>{
    
  }
 
  export const getExamResult =async()=>{
    
  }