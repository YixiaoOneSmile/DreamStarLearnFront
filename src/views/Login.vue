<template>
  <div class="login-page">
    <div class="center-col">
      <img src="@/assets/undraw_secure_login_pdn4.svg" alt="Illustration" class="illustration" />
      <div v-if="isLogin">
        <h2 class="center-text">登录</h2>
        <form @submit.prevent="Login" class="login-form">
          <div class="form-item">
            <input v-model="id" type="text" placeholder="用户名" />
          </div>
          <div class="form-item">
            <input v-model="password" type="password" placeholder="密码" />
          </div>
          <div class="form-item">
            <button type="submit" class="login-form-button">登录</button>
          </div>
          <button @click="isLogin = !isLogin" class="toggle-form-button">
            {{ isLogin ? '去注册' : '去登录' }}
          </button>
        </form>
      </div>
    </div>
    <div v-if="!isLogin">
      <h2 class="center-text">注册</h2>
      <form @submit.prevent="Registration" class="register-form">
        <div class="form-item">
          <input v-model="id" type="text" placeholder="用户名" />
        </div>
        <div class="form-item">
          <input v-model="password" type="password" placeholder="密码" />
        </div>
        <div class="form-item">
          <button type="submit" class="register-form-button">注册</button>
        </div>
        <button @click="isLogin = !isLogin" class="toggle-form-button">
          {{ isLogin ? '去注册' : '去登录' }}
        </button>
      </form>
    </div>

  </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '../api/index';

const router = useRouter();
const isLogin = ref(true)
const id = ref("");
const password = ref("");

const Login = async () => {
  try {
    const response = await login(id.value, password.value);
    console.log(response)
    localStorage.setItem('token', response.data.token);
    await router.push({ name: 'course' });
    location.reload();
  } catch (error) {
    console.error('Login failed:', error);
  }
};
const Registration = async () => {
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
.login-page {
  min-height: 100vh;
  background-color: #ffffff;
  padding: 20px;
}

.center-col {
  text-align: center;
}

.illustration {
  max-width: 20%;
  margin-bottom: 20px;
  margin-top: 10vh;
  animation: slideUp 1s ease-in-out;
}

.center-text {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
  font-weight: bold;
}

.login-form {
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

.login-form-button {
  width: 100%;
  height: 40px;
  background-color: #1890ff;
  border-color: #1890ff;
  color: white;
  font-size: 18px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.login-form-button:hover {
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

@keyframes slideUp {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

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

.toggle-form-button {
  width: 100%;
  height: 40px;
  background-color: #1890ff;
  border-color: #1890ff;
  color: white;
  font-size: 18px;
  border-radius: 4px;
  transition: all 0.3s ease;
}
</style>
  