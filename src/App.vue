<script>
import NavigationButtons from './components/models/NavigationButtons.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const header = ref(null);
    const bodyContentHeight = ref('100vh');

    const adjustConsoleHeight = () => {
      if (header.value) {
        const headerHeight = header.value.offsetHeight;
        const headerMarginTop = parseFloat(getComputedStyle(header.value).marginTop);
        const headerMarginBottom = parseFloat(getComputedStyle(header.value).marginBottom);
        const totalHeaderHeight = headerHeight + headerMarginTop + headerMarginBottom;
        bodyContentHeight.value = `calc(100vh - ${totalHeaderHeight}px)`;
        console.log(bodyContentHeight.value);
      }
    };

    onMounted(() => {
      adjustConsoleHeight();
      window.addEventListener('resize', adjustConsoleHeight);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', adjustConsoleHeight);
    });

    return {
      header,
      bodyContentHeight,
      circles: Array.from({ length: 35 }, (_, id) => {
        const size = Math.random() * 300 + 75;
        const colors = ['#FFA680', '#8085FF', '#74D483'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        return {
          id,
          style: {
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            backgroundColor: color,
            animationDuration: `${Math.random() * 15 + 10}s`,
            width: `${size}px`,
            height: `${size}px`
          }
        };
      })
    };
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
  components: {
    NavigationButtons
  },
  data(){
    return{
      pages: ['Home', 'About', 'Links'],
      formattedTime: '',
    }
  },
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
    getFormattedTime() {
      const options = {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const now = new Date();
      return now.toLocaleString('en-US', options).replace(',', '');
    },
    updateTime() {
      this.formattedTime = this.getFormattedTime();
    }
  }
};
</script>

<template>
  <div class="background">
    <div v-for="circle in circles" :key="circle.id" :style="circle.style" class="circle"></div>
  </div>
  <header ref="header">
    <div class="header-page-links">
      <router-link :to="{ name: 'Home' }" :class="{ active: isActive('/') }">home</router-link>
      <router-link :to="{ name: 'About' }" :class="{ active: isActive('/about') }">about</router-link>
      <router-link :to="{ name: 'Links' }" :class="{ active: isActive('/links') }">links</router-link>
    </div>
    <div class="header-other-links">
      <a href="https://github.com/ddipper/ddipperq.website" target="_blank">source</a>
    </div>
    <div class="header-time">
      <h3><span class="orange-color">time:</span> {{ formattedTime }}</h3>
    </div>
  </header>
  <div class="body-content" :style="{ height: bodyContentHeight }">
    <div class="console">
      <div class="console-header">
        <div class="console-header-circles-group">
          <div class="console-header-circle"></div>
          <div class="console-header-circle"></div>
          <div class="console-header-circle"></div>
        </div>
        <h3 class="console-header-title">{{this.$route.name}}</h3>
      </div>
      <router-view>
      </router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import './assets/colors';

  header{
    display: flex;
    justify-content: space-between;
    padding: 10px 20px 10px 20px;
    margin: 20px 20px 0 20px;
    border-radius: 10px;
    background-color: $header-color;
    color: $text-color;
    font-size: 1.25rem;
    font-weight: 400;

    a{
      color: $text-color;
      text-decoration: underline;
    }

    h3{
      font-size: 1.25rem;
      font-weight: 400;
    }

    .header-page-links{
      display: flex;
      gap: 20px;
      width: 33%;

      .active {
        text-decoration: none;
        color: $orange-color;
        transition: ease-out .25s;
        pointer-events: none;
        cursor: none;
      }
    }

    .header-other-links{
      width: 33%;
      text-align: center;
    }
    .header-time{
      width: 33%;
      text-align: right;
    }
  }

  .body-content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .console {
      background-color: $console-color;
      width: 1300px;
      overflow: hidden;
      border-radius: 10px;
      height: 800px;

      .console-header{
        width: calc(100% - 32px);
        padding: 7.6px 16px;
        background-color: $console-header-color;
        display: flex;

        .console-header-circles-group{
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;

          .console-header-circle{
            width: 12px;
            height: 12px;
            border-radius: 50%;
          }
          .console-header-circle:nth-child(1){
            background-color: $orange-color;
          }
          .console-header-circle:nth-child(2){
            background-color: $purple-color;
          }
          .console-header-circle:nth-child(3){
            background-color: $green-color;
          }
        }

        .console-header-title{
          color: $text-color;
          font-size: 1.5rem;
          font-weight: 400;
          width: 100%;
          text-align: center;
          margin-right: 60px;
        }
      }
    }
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
  }

  .circle {
    position: absolute;
    border-radius: 50%;
    filter: blur(70px);
    opacity: 0.7;
    animation: move 20s linear infinite;
  }

  @keyframes move {
    0% {
      transform: translate(-100vw, -100vh);
    }
    100% {
      transform: translate(100vw, 100vh);
    }
  }

</style>
