<script setup lang="ts">
import { onMounted, ref } from 'vue';
const scrollToContent = () => {
    let h = document.getElementsByClassName("cover")[0].scrollHeight;
    window.scrollTo({ top: h, behavior: "smooth" });
};

//打字机效果
const messages = [
    "探索未知，获得不一样！",
    "相信世界，他很美好！",
    "我们走的很慢，但我们从不退后",
    "我曾踏足山巅，也曾跌落低谷。二者让我受益良多。",
];
const message = messages[Math.floor(Math.random() * messages.length)];
let counter = 0;
let intervalId: number | undefined;

const demoText = ref("");

const startTyping = () => {
    intervalId = setInterval(() => {
        counter++;
        const typedMessage = message.substring(0, counter);
        demoText.value = typedMessage;
        if (counter === message.length) clearInterval(intervalId);
    }, 200);
};

onMounted(() => {
    startTyping();
});

</script>

<template>
    <div class="cover">
        <div class="cover-word-container">

            <h1 class="cover-title">
                启梦科技
            </h1>
            <h2 id="demo" class="cover-title1">{{ demoText }}</h2>
            <div class="nav">
                <a href="https://chat.openai.com/">
                    <div class="nav-item">
                        <img src="../assets/ChatGPT.png" alt="">
                        <p>ChatGPT</p>
                    </div>
                </a>
                <a href="https://bard.google.com/">
                    <div class="nav-item">
                        <img src="../assets/Bard.svg" alt="">
                        <p>Bard</p>
                    </div>
                </a>
                <a href="https://yiyan.baidu.com/welcome">
                    <div class="nav-item">
                        <img src="../assets/wenxin.ico" alt="">
                        <p>文心一言</p>
                    </div>
                </a>
                <a href="https://tongyi.aliyun.com/">
                    <div class="nav-item">
                        <img src="../assets/qianwen.png" alt="">
                        <p>通义千问</p>
                    </div>
                </a>
                <a href="https://xinghuo.xfyun.cn/">
                    <div class="nav-item">
                        <img src="../assets/xunfei.jpg" alt="">
                        <p>讯飞星火</p>
                    </div>
                </a>
                <a href="https://poe.com/login?redirect_url=%2FChatGPT">
                    <div class="nav-item">
                        <img src="../assets/poe.jpg" alt="">
                        <p>PoE</p>
                    </div>
                </a>

            </div>

        </div>
        <button style="font-size: 30px" class="down" @click.e="scrollToContent">
            <img src="../assets/arrow-down.png" alt="">
        </button>
    </div>
</template>

<style scoped>
.nav {
    display: flex;
    width: 60vw;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
    padding: 0;
    list-style: none;
}

.nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2vw;
    text-align: center;
    transition: all 0.2s ease-in-out;
}

.nav-item:hover {
    transform: scale(1.1);
}

.nav-item img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
}

.nav-item p {
    margin-top: 5px;
    font-size: 14px;
    color: #f7f5f5;
}

a {
    text-decoration: none;
    color: inherit;
}

.cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    background: url("");
    background-size: cover;
    background-attachment: fixed;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-top: -10vh;
}

.cover-title {
    font-size: 48px;
    color: #eeeeee;
}

.cover-title1 {
    font-size: 18px;
    color: #eeeeee;
}

.down {
    position: absolute;
    bottom: 10vh;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    width: 80px;
    height: 80px;
    border: none;
    background-color: transparent;
    animation: bounce 1.5s infinite;
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.down img {
    width: 100%;
    height: 100%;
    margin-left: -10vh;
    margin-top: 10vh;
}

.down:hover {
    opacity: 0.8;
}
</style>

