<template>
    <div class="register-page">
      <div class="center-col">
        <img
          src="@/assets/undraw_secure_login_pdn4.svg"
          alt="Illustration"
          class="illustration"
        />
        <h2 class="center-text">注册</h2>
        <form @submit.prevent="submitForm" class="register-form">
          <div class="form-item">
            <input v-model="username" type="text" placeholder="用户名" />
          </div>
          <div class="form-item">
            <input v-model="password" type="password" placeholder="密码" />
          </div>
          <div class="form-item">
            <button type="submit" class="register-form-button">注册</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { register } from '../api/index';
  
  const router = useRouter();
  const username = ref('');
  const password = ref('');
  
  const submitForm = async () => {
    try {
      const response = await register(username.value, password.value);
      console.log(response);
      alert('注册成功')
      await router.push({ name: 'login' });
      // 注册成功后的处理逻辑
      // 可以根据需要进行跳转或其他操作
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };
  </script>
  
  <style scoped>
  .register-page {
    min-height: 100vh;
    background-color: #ffffff;
    padding: 20px;
  }
  
  .center-col {
    text-align: center;
  }
  
  .center-text {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
    font-size: 24px;
    font-weight: bold;
  }
  
  .register-form {
    max-width: 300px;
    margin: 0 auto;
    animation: fadeIn 1s ease-in-out;
  }
  
  .form-item {
    margin-bottom: 16px;
  }
  
  .form-item input {
    width: 100%;
    height: 40px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .register-form-button {
    width: 100%;
    height: 40px;
    background-color: #1890ff;
    border-color: #1890ff;
    color: white;
    font-size: 18px;
    border-radius: 4px;
    transition: all 0.3s ease;
  }
  
  .register-form-button:hover {
    background-color: #40a9ff;
    border-color: #40a9ff;
  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  </style>
  