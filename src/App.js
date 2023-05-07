import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import CourseDetailsPage from './pages/CourseDetailsPage/CourseDetailsPage';
import CourseListPage from './pages/CourseListPage/CourseListPage';
import CreateCoursePage from './pages/CreateCoursePage/CreateCoursePage';
import ExamDetailsPage from './pages/ExamDetailsPage/ExamDetailsPage';
import ExamListPage from './pages/ExamListPage/ExamListPage';
import CreateExamPage from './pages/CreateExamPage/CreateExamPage';
import StudentExamPage from './pages/StudentExamPage/StudentExamPage';
import StudentExamResultPage from './pages/StudentExamResultPage/StudentExamResultPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/courses" element={<CourseListPage />} />
        <Route path="/courses/:courseId" element={<CourseDetailsPage />} />
        <Route path="/create-course" element={<CreateCoursePage />} />
        <Route path="/create-exam" element={<CreateExamPage />} />
        <Route path="/exams/:examId" element={<ExamDetailsPage />} />
        <Route path="/exams" element={<ExamListPage />} />
        <Route path="/reg"  element={<RegisterPage />} />
        <Route path="/exams/:examId/take" element={<StudentExamPage />} />
        <Route path="/exam-result/:resultId" element={<StudentExamResultPage />} /> 

        {/*
         <Route path="/courses" element={<CourseListPage />} />
        <Route path="/courses/:courseId" element={<CourseDetailsPage />} />
        <Route path="/create-course" element={<CreateCoursePage />} />
        <Route path="/exams" element={<ExamListPage />} />
        <Route path="/exams/:examId" element={<ExamDetailsPage />} />
        <Route path="/create-exam" element={<CreateExamPage />} />
        <Route path="/exams/:examId/take" element={<StudentExamPage />} />
        <Route path="/exam-result/:resultId" element={<StudentExamResultPage />} /> 
        */}
      </Routes>
    </Router>
  );
}

export default App;
