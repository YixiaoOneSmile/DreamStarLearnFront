
<template>
  <header>
    <router-link class="header-title" to="/">

      <img class="logo-icon" src="../assets/纸飞机.png" alt="logo">
      启梦
    </router-link>
    <div class="header-menu">
      <a @click="" class="header-menu-item">
        搜索
      </a>
      <router-link to="/" class="header-menu-item">
        首页
      </router-link>
      <router-link to="/Course" class="header-menu-item">
        课程
      </router-link>
      <router-link to="/CourseDetail" class="header-menu-item">
        Test
      </router-link>
      <router-link to="/CreateCourse" class="header-menu-item">
        其他
      </router-link>

      <!-- <router-link v-if="!token" to="" class="header-menu-item user-avatar">
        <img class="avatar-img" src="../assets/images/纸飞机.png" alt="avatar" />
        <ul class="menus-submenu">
          <li><a href="#">个人资料</a></li>
          <li>
          <router-link to="/create" class="">
            发布文章
          </router-link>
        </li>
        </ul>
      </router-link>
      <router-link v-else to="/login" class="header-menu-item">
        登录
      </router-link> -->
    </div>
  </header>
</template>
    

  
<style scoped>
header {
  position: absolute;
  top: 0;
  height: 60px;
  width: 100%;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%;
  box-sizing: border-box;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  --text-color: #eeeeee;
  --text-hover-color: white;
  animation: fadeUpIn 1s;
}

.logo-icon {
  width: 30px;
  height: 30px;
  z-index: 10;
  /* 确保图标位于标题前面 */
}

.logo-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.blog-avatar {
  padding: 20px;
  text-align: center;
  transition: all 0.5s;
}

.blog-avatar:hover {
  transform: rotate(360deg);
}

.blog-info {
  margin-top: 16px;
  text-align: center;
  color: #222222;
}

hr {
  position: relative;
  margin: 16px auto;
  border: 2px dashed #d2ebfd;
  width: calc(100% - 4px);
}


.header-title {
  color: var(--text-color);
  font-size: 23px;
  font-family: "Kanit";
  text-decoration: none;
  transition: all 0.2s;
}

.header-title:hover {
  color: var(--text-hover-color);
}

.header-icon {
  margin-right: 7px;
}

.drawer-menu {
  display: flex;
  position: relative;
  flex-direction: column;
}

.header-menu {
  display: flex;

  @media (max-width: 759px) {
    flex-direction: column;
  }

  position: relative;
}

.header-menu-mobile {
  display: none;
  position: relative;
}

.header-menu-item {
  color: var(--text-color);
  text-decoration: none;
  position: relative;
  padding-bottom: 5px;
  margin-left: 25px;

  @media (min-width: 760px) {
    font-size: 14px;
    transition: color 0.4s ease-in-out;
  }

  @media (max-width: 759px) {
    font-size: 18px;

    i {
      margin-left: 25px;
    }
  }
}


@media (min-width: 760px) {
  .header-menu-item:after {
    content: "";
    width: 0;
    height: 3px;
    background: #80c8f8;
    position: absolute;
    bottom: 0;
    left: 50%;
    transition: all 0.4s ease-in-out;
    border-radius: 2px;
  }

  .header-menu-item:hover:after {
    left: 0%;
    width: 100%;
  }

  .header-menu-item:hover {
    color: var(--text-hover-color);
  }
}

@media (max-width:759px) {
  .header-menu {
    display: none;
  }

  .header-menu-mobile {
    display: flex;
  }

  .header-menu-item:hover {
    color: #80c8f8;
  }

}

@keyframes fadeUpIn {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    opacity: 0%;
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 100%;
  }
}

.header-menu-item:hover .menus-submenu {
  display: block;
}

.menus-submenu {
  position: absolute;
  display: none;
  right: 0;
  width: max-content;
  margin-top: 8px;
  box-shadow: 0 5px 20px -4px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  animation: submenu 0.3s 0.1s ease both;
}

.menus-submenu ul,
li {
  list-style: none;
  overflow: hidden;
  padding: 0;
  margin: 0;
}

.menus-submenu:before {
  position: absolute;
  top: -8px;
  left: 0;
  width: 100%;
  height: 20px;
  content: "";
}

.menus-submenu a {
  text-align: center;
  line-height: 2;
  color: #4c4948 !important;
  text-shadow: none;
  display: block;
  padding: 6px 14px;
}

.menus-submenu a:hover {
  background: #4ab1f4;
}

@keyframes submenu {
  0% {
    opacity: 0;
    filter: alpha(opacity=0);
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    filter: none;
    transform: translateY(0);
  }
}



.user-avatar {
  position: relative;
  padding: 0;
  margin: 0;
}

.user-avatar .menus-submenu {
  position: absolute;
  display: none;
  top: 100%;
  right: 0;
  z-index: 1;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 5px 20px -4px rgba(0, 0, 0, 0.5);
  background-color: #fff;
}

.user-avatar:hover .menus-submenu {
  display: block;
}

.avatar-img {
  display: block;
  margin-top: -1vh;
  margin-left: 1vw;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #ddd;
  transition: border-color 0.3s ease-in-out;
}

.avatar-img:hover {
  border-color: #80c8f8;
}

.menus-submenu a {
  text-align: center;
  line-height: 2;
  color: #4c4948 !important;
  text-shadow: none;
  display: block;
  padding: 6
}
</style>