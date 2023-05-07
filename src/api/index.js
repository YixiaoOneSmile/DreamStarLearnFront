import axios from 'axios';

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