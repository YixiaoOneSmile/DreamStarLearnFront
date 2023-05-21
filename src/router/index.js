import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import  Register from '../views/Register.vue';
import CourseList from '../views/CourseList.vue';
import CourseDeatil from '../views/CourseDetail.vue';
import CreateCourse from '../views/CreateCourse.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Login',
      name: 'login',
      component: Login
    },
    {
      path: '/Register',
      name: 'register',
      component: Register
    },
    {
      path: '/Course',
      name: 'course',
      component: CourseList
    },
    {
      path: '/CourseDetail',
      name: 'coursedetail',
      component: CourseDeatil
    },
    {
      path: '/CreateCourse',
      name: 'createcourse',
      component: CreateCourse
    },
  ]
});

export default router;
